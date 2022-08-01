const contracts = require('./abi');
const fs = require('fs');
const config = require('config');
const {sleep} = require('./utils');
const {sendTransaction, query} = require('./ethereum');
const address = config.get('ACCOUNT');
const secret = fs.readFileSync('./.secret', 'utf8');
const chainId = 210425;

const MAP_ID = {
    EQUIP: 0,
    PET: 1,
}

async function exchangeToken(contract, mapId) {
  let balance = await query(contract, 'balanceOf', [address]);
  let tokenIds = [];
  for (let i = 0; i < balance; ++i) {
    let tokenId = await query(contract, 'tokenOfOwnerByIndex', [address, i]);
    tokenIds.push(tokenId);
  }
  await sendTransaction(
    contracts.D,
    contracts.U,
    chainId,
    secret,
    'exchangeToken',
    [mapId, tokenIds]
  );
  await sleep(2);
}

async function stake(contract, tokenId) {
  await sendTransaction(
    contracts.D,
    contract,
    chainId,
    secret,
    'stake',
    [tokenId]
  );
  await sleep(2);
}

async function redeem(contract, tokenId) {
  await sendTransaction(
    contracts.D,
    contract,
    chainId,
    secret,
    'redeem',
    [tokenId]
  );
  await sleep(2);
}

async function useLuckyStone(luckyStone) {
    await sendTransaction(
      contracts.D,
      contracts.U,
      chainId,
      secret,
      'useLuckyStone',
      [luckyStone]
    );
    await sleep(2);
}

async function buyLuckyStone(nums){
  try {
    let balance = await query(contracts.G, 'balanceOf', [address]);
    let price = await query(contracts.U, 'queryLuckyStonePrice', []);
    balance = contracts.D.utils.toNumber(balance);
    price = contracts.D.utils.toNumber(price);
    let approveAmount = price * nums;
    if (approveAmount > balance) {
      throw Error("amount not enough");
    }
    let amountPerTime = 10;
    let times = nums / amountPerTime;
    let remain = nums % 10;
    let stones = [];
    let cache = [];
    for (let i = 1; i <= times; ++i) {
      let ret = await sendTransaction(
        contracts.D,
        contracts.U,
        chainId,
        secret,
        'buyLuckyStone',
        [amountPerTime]
      );
      cache.push(ret);
      await sleep(2);
    }
    if (remain) {
      let ret = await sendTransaction(
        contracts.D,
        contracts.U,
        chainId,
        secret,
        'buyLuckyStone',
        [remain]
      );
      cache.push(ret);
      await sleep(2);
    }
    for (let i = 0; i < cache.length; i++) {
        let ret = cache[i];
        for (let j = 0; j < ret.logs.length; j++) {
            let topics = ret.logs[j].topics;
            if (ret.logs[j].address == contracts.W._address && topics.length != 0) {
                if (topics[0] == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef') {
                    let id = contracts.D.eth.abi.decodeParameter('uint256', topics[3]);
                    stones.push(id);
                }
            }
        }
    }
    return stones;
  } catch (err) {
    console.log(err);
  }
}

async function goldStakingBlock(roleId) {
    let info = await query(contracts.G, 'stakeInfo', [address, roleId]);
    let json = JSON.parse(info);
    return json.stakeBn;
}

async function petStakingBlock(roleId) {
    let info = await query(contracts.j, 'stakeInfo', [address, roleId]);
    let json = JSON.parse(info);
    return json.stakeBn;
}

async function equipStakingBlock(roleId) {
    let info = await query(contracts.H, 'stakeInfo', [address, roleId]);
    let json = JSON.parse(info);
    return json.stakeBn;
}

async function stakeGold(roleId) {
    await stake(contracts.G, roleId);
}

async function stakePet(roleId) {
    await stake(contracts.j, roleId);
}

async function stakeEquip(roleId) {
    await stake(contracts.H, roleId);
}

async function getBlock(block) {
    return await contracts.D.eth.getBlock(block);
}

async function redeemGold(roleId) {
    await redeem(contracts.G, roleId);
}

async function redeemPet(roleId) {
    await redeem(contracts.j, roleId);
}

async function redeemEquip(roleId) {
    await redeem(contracts.H, roleId);
}

async function approve() {
    await sendTransaction(
      contracts.D,
      contracts.G,
      chainId,
      secret,
      'approve',
      [contracts.U.options.address, config.get('APPROVAL')]
    );
    await sleep(2);
}

async function exchangePet() {
    await exchangeToken(contracts.j, MAP_ID.PET);
}

async function exchangeEquip() {
    await exchangeToken(contracts.H, MAP_ID.EQUIP);
}

module.exports = {
    goldStakingBlock: goldStakingBlock,
    petStakingBlock: petStakingBlock,
    equipStakingBlock: equipStakingBlock,
    stakeGold: stakeGold,
    stakePet: stakePet,
    stakeEquip: stakeEquip,
    getBlock: getBlock,
    redeemGold: redeemGold,
    redeemPet: redeemPet,
    redeemEquip: redeemEquip,
    approve: approve,
    buyLuckyStone: buyLuckyStone,
    useLuckyStone: useLuckyStone,
    exchangePet: exchangePet,
    exchangeEquip: exchangeEquip,
}