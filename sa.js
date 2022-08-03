const contracts = require('./abi');
contracts.D.eth.handleRevert = true;
const fs = require('fs');
const config = require('config');
const {sleep} = require('./utils');
const {sendTransaction, query} = require('./ethereum');
const address = config.get('ACCOUNT');
const secret = fs.readFileSync('./.secret', 'utf8');
const chainId = 210425;
const SLEEP_TIME = config.get('SLEEP');

const MAP_ID = {
    EQUIP: 0,
    PET: 1,
}

const ITEM_TYPE = {
  ROLE: 1,
  EQUIP: 2,
  STONE: 3,
}

const EQUIP_TYPE = {
  WEAPON: 0,
  CLOTH: 1,
  PET: 2,
}

async function tokenOfOwnerByIndex(address, index) {
  return query(contracts.W, 'tokenOfOwnerByIndex', [address, index]);
}

async function sellToken() {
  let balance = await query(contracts.W, 'balanceOf', [address]);
  for (let i = 0; i < Number(balance);) {
    console.log(i, balance);
    let tokenId = await tokenOfOwnerByIndex(address, i);
    let tokenType = await query(contracts.U, 'queryTokenType', [tokenId]);
    if (tokenType == ITEM_TYPE.EQUIP) {
      let tokenInfo = await queryToken(tokenId);
      if (parseInt(tokenInfo._rare) <= config.get('RARE')) {
        console.log(tokenInfo);
        await sendTransaction(
          contracts.D,
          contracts.G,
          chainId,
          secret,
          'sellTokenInfo',
          [tokenId]
        );
        await sleep(SLEEP_TIME);
        --balance;
        continue;
      }
    }
    ++i;
  }
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
  await sleep(SLEEP_TIME);
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
  await sleep(SLEEP_TIME);
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
  await sleep(SLEEP_TIME);
}

async function useLuckyStone(luckyStone) {
    console.log('useLuckyStone', luckyStone);
    await sendTransaction(
      contracts.D,
      contracts.U,
      chainId,
      secret,
      'useLuckyStone',
      [luckyStone]
    );
    await sleep(SLEEP_TIME);
}

async function getLuckyStones(num) {
  let stones = await queryLuckyStone(address);
  if (stones.length < num) {
    let buyStones = await buyLuckyStone(num - stones.length);
    stones = stones.concat(buyStones);
  }
  return stones;
}

async function queryLuckyStone(address) {
  let balance = await query(contracts.W, 'balanceOf', [address]);
  var luckyStones = [];
  for (let i = 0; i < Number(balance); ++i) {
    let tokenId = await query(contracts.W, 'tokenOfOwnerByIndex', [address, i]);
    let tokenType = await query(contracts.U, 'queryTokenType', [tokenId]);
    if (tokenType == ITEM_TYPE.ROLE.STONE) {
      luckyStones.push(tokenId);
    }
  }
  console.log('queryLuckyStone', luckyStones);
  return luckyStones;
};

async function queryEquips() {
  let balance = await query(contracts.W, 'balanceOf', [address]);
  var equips = [];
  for (let i = 0; i < Number(balance); ++i) {
    let tokenId = await query(contracts.W, 'tokenOfOwnerByIndex', [address, i]);
    let tokenType = await query(contracts.U, 'queryTokenType', [tokenId]);
    if (tokenType == '2') {
      equips.push(tokenId);
    }
  }
  return equips;
};

async function queryFreeRoles(address) {
  let balance = await query(contracts.W, 'balanceOf', [address]);
  var roles = [];
  for (let i = 0; i < Number(balance); ++i) {
    let tokenId = await query(contracts.W, 'tokenOfOwnerByIndex', [address, i]);
    let tokenType = await query(contracts.U, 'queryTokenType', [tokenId]);
    if (tokenType == ITEM_TYPE.ROLE) {
      roles.push(tokenId);
    }
  }
  return roles;
};

async function buyLuckyStone(nums){
  console.log('buyLuckyStone', nums);
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
    await sleep(SLEEP_TIME);
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
    await sleep(SLEEP_TIME);
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
}

async function goldStakingBlock(roleId) {
    let info = await query(contracts.G, 'stakeInfo', [address, roleId]);
    let json = JSON.parse(info);
    console.log('goldStakingBlock', roleId, json);
    return json.stakeBn;
}

async function petStakingBlock(roleId) {
    let info = await query(contracts.j, 'stakeInfo', [address, roleId]);
    let json = JSON.parse(info);
    console.log('petStakingBlock', roleId, json);
    return parseInt(json.stakeBn);
}

async function equipStakingBlock(roleId) {
    let info = await query(contracts.H, 'stakeInfo', [address, roleId]);
    let json = JSON.parse(info);
    console.log('equipStakingBlock', roleId, json);
    return json.stakeBn;
}

async function stakeGold(roleId) {
    console.log('stakeGold', roleId);
    await stake(contracts.G, roleId);
}

async function stakePet(roleId) {
    console.log('stakePet', roleId);
    await stake(contracts.j, roleId);
}

async function stakeEquip(roleId) {
    console.log('stakeEquip', roleId);
    await stake(contracts.H, roleId);
}

async function getBlock(block) {
    return await contracts.D.eth.getBlock(block);
}

async function redeemGold(roleId) {
    console.log('redeemGold', roleId);
    await redeem(contracts.G, roleId);
}

async function redeemPet(roleId) {
    console.log('redeemPet', roleId);
    await redeem(contracts.j, roleId);
}

async function redeemEquip(roleId) {
    console.log('redeemEquip', roleId);
    await redeem(contracts.H, roleId);
}

async function approve() {
    console.log('approve');
    await sendTransaction(
      contracts.D,
      contracts.G,
      chainId,
      secret,
      'approve',
      [contracts.U.options.address, config.get('APPROVAL')]
    );
    await sleep(SLEEP_TIME);
}

async function exchangePet() {
    await exchangeToken(contracts.j, MAP_ID.PET);
}

async function exchangeEquip() {
    await exchangeToken(contracts.H, MAP_ID.EQUIP);
}

async function queryRoles() {
  let r0 = await queryFreeRoles(address);
  let r1 = await query(contracts.G, 'stakeTokenIdList', [address]);
  let r2 = await query(contracts.j, 'stakeTokenIdList', [address]);
  let r3 = await query(contracts.H, 'stakeTokenIdList', [address]);
  return {
    free: r0,
    gold: r1,
    pet: r2,
    equip: r3
  }
}

async function queryCharacter(characterId) {
  return query(contracts.U, 'queryCharacter', [characterId])
}

async function wear(roleId, equipId) {
  console.log('wear', roleId, equipId);
  await sendTransaction(
    contracts.D,
    contracts.U,
    chainId,
    secret,
    'wear',
    [roleId, [equipId]]
  );
  await sleep(SLEEP_TIME);
}

async function queryToken(tokenId) {
  return query(contracts.U, 'queryToken', [tokenId])
}

module.exports = {
    EQUIP_TYPE: EQUIP_TYPE,
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
    getLuckyStones: getLuckyStones,
    useLuckyStone: useLuckyStone,
    exchangePet: exchangePet,
    exchangeEquip: exchangeEquip,
    queryRoles: queryRoles,
    queryCharacter: queryCharacter,
    queryEquips: queryEquips,
    wear: wear,
    queryToken: queryToken,
    sellToken: sellToken,
}