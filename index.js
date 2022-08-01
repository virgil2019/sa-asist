const config = require('config');
const sa = require('./sa');

async function checkStake(roles) {
    // Check status
    for (let i = 0; i < roles.GOLD.length; i++) {
        if (sa.goldStakingBlock(roles.GOLD[i]) == 0) {
            await sa.stakeGold(roles.GOLD[i]);
        }
    }

    let stakingBlock = 0;
    for (let i = 0; i < roles.PET.length; i++) {
        let block = await sa.petStakingBlock(roles.PET[i]);
        if (block == 0) {
            await sa.stakePet(roles.PET[i]);
            stakingBlock = Number.MAX_SAFE_INTEGER;
        }
        else {
            if (block > stakingBlock) {
                stakingBlock = block;
            }
        }
    }

    for (let i = 0; i < roles.EQUIP.length; i++) {
        let block = await sa.petStakingBlock(roles.PET[i]);
        if (block == 0) {
            await sa.stakeEquip(roles.EQUIP[i]);
            stakingBlock = Number.MAX_SAFE_INTEGER;
        }
        else {
            if (block > stakingBlock) {
                stakingBlock = block;
            }
        }
    }

    return stakingBlock;
}

async function mainLoop() {
    let roles = config.get('ROLES');
    let stakingBlock = await checkStake(roles);

    // Is it time to redeem
    let block = await sa.getBlock(stakingBlock);
    let nowSeconds = new Date().getTime() / 1000;
    if (nowSeconds - block.timestamp >= config.get('STAKE_TIME') * 3600) {
        // Redeem gold
        for (let i = 0; i < roles.GOLD.length; i++) {
            await sa.redeemGold(roles.GOLD[i]);
        }

        // Approve
        await sa.approve();

        // Buy lucky stones
        let stones = await sa.buyLuckyStone(config.get('LUCKY_STONE_NUM_PER_ROLE') * (roles.PET.length + roles.EQUIP.length));

        let index = 0;
        for (let i = 0; i < roles.PET.length; i++) {
            // Use lucky stones
            await sa.useLuckyStone(stones.slice(index, index + config.get('LUCKY_STONE_NUM_PER_ROLE')));
            index += config.get('LUCKY_STONE_NUM_PER_ROLE');
            // Redeem
            await sa.redeemPet(roles.PET[i]);
            // Exchange
            await sa.exchangePet();
        }
        
        for (let i = 0; i < roles.EQUIP.length; i++) {
            // Use lucky stones
            await sa.useLuckyStone(stones.slice(index, index + config.get('LUCKY_STONE_NUM_PER_ROLE')));
            index += config.get('LUCKY_STONE_NUM_PER_ROLE');
            // Redeem
            await sa.redeemEquip(roles.EQUIP[i]);
            // Exhange
            await sa.exchangeEquip();
        }
    }
    // console.log('queryCharacter', await sa.queryCharacter(83575));
}

async function main() {
    await mainLoop();
    // setInterval(mainLoop, config.get('CHECK_INTERVAL') * 1000);
}

main()