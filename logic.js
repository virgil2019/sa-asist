const config = require('config');
const sa = require('./sa');
const { sleep } = require('./utils');

class Logic {
    constructor() {
        this.roles = null;
    }

    async init() {
        this.roles = await sa.queryRoles();
        this.roles = JSON.parse(JSON.stringify(this.roles));
        console.log('init roles', this.roles);
    }

    // check status and try to let them work
    async checkAndDispatch() {
        // if it is the time to redeem, return true
        let stakingBlock = 0;
        for (let i = 0; i < this.roles.pet.length; i++) {
            let block = await sa.petStakingBlock(this.roles.pet[i]);
            if (block > stakingBlock) {
                stakingBlock = block;
            }
        }

        for (let i = 0; i < this.roles.equip.length; i++) {
            let block = await sa.equipStakingBlock(this.roles.equip[i]);
            if (block > stakingBlock) {
                stakingBlock = block;
            }
        }
        
        if (stakingBlock > 0) {
            let block = await sa.getBlock(stakingBlock);
            let nowSeconds = new Date().getTime() / 1000;
            if (nowSeconds - block.timestamp >= config.get('STAKE_TIME') * 3600) {
                // it is the time to redeem
                return true;
            }
        }

        // not the time to redeem, stake
        // sort free roles by power
        let powerMap = {};
        for (let i = 0; i < this.roles.free.length; i++) {
            let info = await sa.queryCharacter(this.roles.free[i]);
            powerMap[this.roles.free[i]] = info.totalPower;
        }

        this.roles.free.sort((t1, t2) => {
            return powerMap[t2] - powerMap[t1];
        });
        console.log('sorted free roles', this.roles.free);

        // stake equip
        let equipNum = config.get('EQUIP_NUM') - this.roles.equip.length;
        for (let i = 0; i < equipNum; i++) {
            if (this.roles.free.length != 0) {
                await sa.stakeEquip(this.roles.free[0]);
                let id = this.roles.free.splice(0, 1);
                this.roles.equip.push(id[0]);
            }
        }

        // stake pet
        let petNum = config.get('PET_NUM') - this.roles.pet.length;
        for (let i = 0; i < petNum; i++) {
            if (this.roles.free.length != 0) {
                await sa.stakePet(this.roles.free[0]);
                let id = this.roles.free.splice(0, 1);
                this.roles.pet.push(id[0]);
            }
        }

        // stake gold
        for (let i = 0; i < this.roles.free.length; i++) {
            await sa.stakeGold(this.roles.free[i]);
            this.roles.gold.push(this.roles.free[i]);
        }
        this.roles.free = [];

        return false;
    }
            
    // Redeem gold
    async redeemGold() {
        for (let i = 0; i < this.roles.gold.length; i++) {
            await sa.redeemGold(this.roles.gold[i]);
        }
    }

    // Redeem pet
    async redeemPet(stones) {
        for (let i = 0; i < this.roles.pet.length; i++) {
            // Use lucky stones
            await sa.useLuckyStone(stones.slice(0, config.get('LUCKY_STONE_NUM_PER_ROLE')));
            stones.splice(0, config.get('LUCKY_STONE_NUM_PER_ROLE'));
            // Redeem
            await sa.redeemPet(this.roles.pet[i]);
            // Exchange
            await sa.exchangePet();
        }
    }

    async redeemEquip(stones) {
        for (let i = 0; i < this.roles.equip.length; i++) {
            // Use lucky stones
            await sa.useLuckyStone(stones.slice(0, config.get('LUCKY_STONE_NUM_PER_ROLE')));
            stones.splice(0, config.get('LUCKY_STONE_NUM_PER_ROLE'));
            // Redeem
            await sa.redeemEquip(this.roles.equip[i]);
            // Exhange
            await sa.exchangeEquip();
        }
    }

    async mainLoop() {
        try {
            await this.init();
            let redeem = await this.checkAndDispatch();

            // Is it time to redeem
            if (!redeem) {
                return;
            }

            await this.redeemGold();

            // Approve
            await sa.approve();

            // Buy lucky stones
            let stones = await sa.getLuckyStones(config.get('LUCKY_STONE_NUM_PER_ROLE') * (this.roles.pet.length + this.roles.equip.length));

            // Redeem pet
            await this.redeemPet(stones);

            // Redeem equip
            await this.redeemEquip(stones);
        }
        catch (e) {
            console.log(e);
        }
        // console.log('queryCharacter', await sa.queryCharacter(83575));
    }    
}

module.exports = Logic;