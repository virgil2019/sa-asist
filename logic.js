const config = require('config');
const sa = require('./sa');
const { sleep } = require('./utils');

class Logic {
    constructor() {
        this.roles = null;
    }

    async queryRoles() {
        this.roles = await sa.queryRoles();
        this.roles = JSON.parse(JSON.stringify(this.roles));
        console.log('query roles', this.roles);
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
    async redeemPet() {
        for (let i = 0; i < this.roles.pet.length; i++) {
            // Redeem
            await sa.redeemPet(this.roles.pet[i]);
            await this.exchangePet();
        }
    }

    async redeemEquip() {
        for (let i = 0; i < this.roles.equip.length; i++) {
            // Redeem
            await sa.redeemEquip(this.roles.equip[i]);
            await this.exchangeEquip();
        }
    }

    // Exchange pet
    async exchangePet() {
        let petTokens = await sa.queryPetToken();
        console.log('exchange petTokens', petTokens, petTokens.length);
        if (petTokens.length >= config.get('EXCHANGE_MIN')) {
            // exchange pet tokens
            let stones = await sa.getLuckyStones(config.get('LUCKY_STONE_NUM_PER_ROLE'));
            if (stones == null) {
                return;
            }
            await sa.useLuckyStone(stones.slice(0, config.get('LUCKY_STONE_NUM_PER_ROLE')));
            await sa.exchangePet();
        }
    }

    // Exchange equip
    async exchangeEquip() {
        let equipTokens = await sa.queryEquipToken();
        console.log('exchange equipTokens', equipTokens, equipTokens.length);
        if (equipTokens.length >= config.get('EXCHANGE_MIN')) {
            // exchange equip tokens
            let stones = await sa.getLuckyStones(config.get('LUCKY_STONE_NUM_PER_ROLE'));
            if (stones == null) {
                return;
            }
            await sa.useLuckyStone(stones.slice(0, config.get('LUCKY_STONE_NUM_PER_ROLE')));
            await sa.exchangeEquip();
        }
    }

    async changeEquips() {
        let queryBestEquip = async () => {
            let ret = {};
            let equips = await sa.queryEquips();
            for (let i = 0; i < equips.length; i++) {
                let equipDetail = await sa.queryToken(equips[i]);
                let equipType = equipDetail._position;
                if (ret[equipType] == null) {
                    ret[equipType] = equipDetail;
                }
                else {
                    if (parseInt(ret[equipType]._power) < parseInt(equipDetail._power)) {
                        ret[equipType] = equipDetail;
                    }
                }
            }

            return ret;
        }

        // sort roles by power
        let roles = await sa.queryRoles();
        roles = JSON.parse(JSON.stringify(roles));
        
        let powerMap = {};
        for (let i = 0; i < roles.free.length; i++) {
            let info = await sa.queryCharacter(roles.free[i]);
            powerMap[roles.free[i]] = info.totalPower;
        }

        roles.free.sort((t1, t2) => {
            return powerMap[t2] - powerMap[t1];
        });
        console.log('sorted free roles', roles.free);

        for (let i = 0; i < roles.free.length; i++) {
            let best = await queryBestEquip();
            let character = await sa.queryCharacter(roles.free[i]);
            for (let j = 0; j < character.tokenList.length; j++) {
                let equip = await sa.queryToken(character.tokenList[j]);
                if (parseInt(equip._power) < parseInt(best[j]._power)) {
                    await sa.wear(roles.free[i], best[j]._tokenId);
                }
            }
        }
    }

    async upgrade() {
        let upgradeOnce = async () => {
            let equips = await sa.queryEquips();
            for (let i = 0; i < equips.length; i++) {
                let first = await sa.queryToken(equips[i]);
                for (let j = i + 1; j < equips.length; j++) {
                    let second = await sa.queryToken(equips[j]);
                    if (first._name == second._name && first._level == second._level) {
                        await sa.upgrade(equips[i], equips[j]);
                        return true;
                    }
                }
            }
            return false;
        };

        while (true) {
            let ret = await upgradeOnce();
            if (!ret) {
                break;
            }
        }
    }

    async init() {
        sa.init();
    }

    async mainLoop() {
        this.init();
        await this.queryRoles();
        let redeem = await this.checkAndDispatch();

        // Is it time to redeem
        if (!redeem) {
            return;
        }

        await this.redeemGold();

        // Approve
        await sa.approve();

        // Redeem pet
        await this.redeemPet();

        // Redeem equip
        await this.redeemEquip();

        // Clear box
        await sa.sellToken();

        // Upgrade
        await this.upgrade();

        // Change equips
        await this.changeEquips();
        // console.log('queryCharacter', await sa.queryCharacter(83575));
    }
    
    async run() {
        while (true) {
            try {
                await this.mainLoop();
                await sleep(config.get('CHECK_INTERVAL'));
            }
            catch (e) {
                console.log(e);
                if (e.toString().indexOf('not open')) {
                    this.init();
                }
            }
        }
    }
}

module.exports = Logic;