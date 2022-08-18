const abi = require('./abi');
const BN = require('bn.js');
const contracts = abi.connect();
contracts.D.eth.handleRevert = true;
const fs = require('fs');
const config = require('config');
const {query, sendTransaction} = require('./ethereum');
const {sleep} = require('./utils');
const {wrapErc20Contract} = require('./erc20');
const SCGT = wrapErc20Contract(contracts.D, '0x0e16C1065d69f80F7E0948D566A267A63767a196');
// const address = '0x9B305B2E6dB48a28fe0A53265290b8FFFbA346A3';
const address = '0x6628fcfaf1d86fad0c337f2143bc243ef4b99d04';
const secret = fs.readFileSync('./.secret', 'utf8');
const chainId = 210425;
// mint equipment and pet time
const stakeTime = 3 * 3600;
// tokenType

// 稀有度小于 2 的都回收
async function sellToken() {
  let balance = await query(contracts.W, 'balanceOf', [address]);
  for (let i = 0; i < Number(balance);) {
    console.log(i, balance);
    let tokenId = await tokenOfOwnerByIndex(address, i);
    let tokenType = await queryTokenType(tokenId);
    if (tokenType == '2') {
      let tokenInfo = await queryToken(tokenId);
      if (tokenInfo[2] == '1' || tokenInfo[2] == '2') {
        console.log(tokenInfo);
        await sendTransaction(
          contracts.D,
          contracts.G,
          chainId,
          secret,
          'sellTokenInfo',
          [tokenId]
        );
        await sleep(2);
        --balance;
        continue;
      }
    }
    ++i;
  }
}

// mapId
// 0: mint equipment scene
// 1: mint pet scene
async function mint(contract, mapId) {
  let tokenIdList = await query(contract, 'stakeTokenIdList', [address]);
  for (let i = 0; i < tokenIdList.length; ++i) {
    let tokenId = tokenIdList[i];
    let stakeInfo = await query(contract, 'stakeInfo', [address, tokenId]);
    stakeInfo = JSON.parse(stakeInfo);
    let block = await contracts.D.eth.getBlock(stakeInfo.stakeBn);
    let nowSeconds = new Date().getTime() / 1000
    if (nowSeconds - block.timestamp >= stakeTime) {
      await redeem(contract, tokenId);
      await sleep(2);
      await stake(contract, tokenId);
      await sleep(2);
      await exchangeToken(contract, mapId);
    }
  }
}

// mapId
// 0: mint equipment scene
// 1: mint pet scene
async function exchangeToken(contract, mapId) {
  let balance = await query(contract, 'balanceOf', [address]);
  let tokenIds = [];
  for (let i = 0; i < balance; ++i) {
    let tokenId = await query(contract, 'tokenOfOwnerByIndex', [address, i]);
    tokenIds.push(tokenId);
  }
  console.log('tokenIds', tokenIds);
  return;
  await sendTransaction(
    contracts.D,
    contract,
    chainId,
    secret,
    'exchangeToken',
    [mapId, tokenIds]
  );
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
}

async function useLuckyStone(luckyStone, nums) {
  try {
    if (luckyStone.length < nums) {
      throw Error("lucky stone not enough");
    }
    let useStone = luckyStone.slice(0, nums);
    console.log(useStone);
    await sendTransaction(
      contracts.D,
      contracts.U,
      chainId,
      secret,
      'useLuckyStone',
      [useStone]
    );
  } catch (e) {
    console.log(e);
  }
}

async function queryCharacter(characterId) {
  return query(contracts.U, 'queryCharacter', [characterId])
}

async function queryMintPetStakeInfo(tokenId) {
  return query(contracts.j, 'stakeInfo', [address, tokenId]);
}

async function tokenOfOwnerByIndex(address, index) {
  return query(contracts.W, 'tokenOfOwnerByIndex', [address, index]);
}

async function queryToken(tokenId) {
  return query(contracts.U, 'queryToken', [tokenId])
}

// tokenType 
// 1: 角色
// 2: 武器，衣服，宠物
// 3: 幸运石
async function queryTokenType(tokenId) {
  return query(contracts.U, 'queryTokenType', [tokenId])
}

async function queryRoles() {
  let r0 = await queryFreeRoles(address);
  let r1 = await query(contracts.G, 'stakeTokenIdList', [address]);
  let r2 = await query(contracts.j, 'stakeTokenIdList', [address]);
  let r3 = await query(contracts.H, 'stakeTokenIdList', [address]);
  let ret = {
    free: r0,
    gold: r1,
    pet: r2,
    equip: r3
  }
  console.log(ret)
  return ret
}

async function queryFreeRoles(address) {
  let balance = await query(contracts.W, 'balanceOf', [address]);
  var roles = [];
  for (let i = 0; i < Number(balance); ++i) {
    let tokenId = await query(contracts.W, 'tokenOfOwnerByIndex', [address, i]);
    let tokenType = await query(contracts.U, 'queryTokenType', [tokenId]);
    if (tokenType == '1') {
      roles.push(tokenId);
    }
  }
  console.log('roles', roles);
  return roles;
};

async function queryLuckyStone(address) {
  let balance = await query(contracts.W, 'balanceOf', [address]);
  var luckyStones = [];
  for (let i = 0; i < Number(balance); ++i) {
    let tokenId = await query(contracts.W, 'tokenOfOwnerByIndex', [address, i]);
    let tokenType = await query(contracts.U, 'queryTokenType', [tokenId]);
    if (tokenType == '3') {
      luckyStones.push(tokenId);
    }
  }
  console.log('luckyStones', luckyStones);
  return luckyStones;
};

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
    await sendTransaction(
      contracts.D,
      contracts.G,
      chainId,
      secret,
      'approve',
      [contracts.U.options.address, approveAmount]
    );
    await sleep(2);
    let amountPerTime = 10;
    let times = nums / amountPerTime;
    let remain = nums % 10;
    for (let i = 1; i <= times; ++i) {
      await sendTransaction(
        contracts.D,
        contracts.U,
        chainId,
        secret,
        'buyLuckyStone',
        [amountPerTime]
      );
      await sleep(2);
    }
    if (remain) {
      await sendTransaction(
        contracts.D,
        contracts.U,
        chainId,
        secret,
        'buyLuckyStone',
        [remain]
      );
    }
  } catch (err) {
    console.log(err);
  }
}

async function queryEquips(address) {
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

async function transferToken(contract, to, id) {
  await sendTransaction(
    contracts.D,
    contract,
    chainId,
    secret,
    'transferFrom',
    [address, to, id]
  );
}

async function queryMarket() {
  let a = await query(contracts.z, 'queryStoreOrderList', [2,1,50]);
  console.log('a', a.length);
  for (let i = 0; i < a.length; i++) {
    if (a[i]._orderId != 0 && a[i]._buyTime == 0) {
      // console.log(i, a[i]);
      let character = await queryCharacter(a[i]._tokenId);
      let price = BigInt(a[i]._price) / BigInt(10 ** 18);
      // if (parseInt(character.powerFactor) > 25 && price < 20000n) {
        console.log('character', a[i]._orderId, price);
      // }
    }
  }
}

async function buyToken(orderId, price, characterId) {
  // approve
  await sendTransaction(
    contracts.D,
    SCGT,
    chainId,
    secret,
    'approve',
    [contracts.z._address, price]
  );

  // buy
  await sendTransaction(
    contracts.D,
    contracts.z,
    chainId,
    secret,
    'buyOrder',
    [characterId, orderId]
  );
}

// 0xfdd9C1123bA300D4B555b0182a69faFB59322FC9
async function test() {
  // let a = await transferToken(contracts.H, '0xfdd9C1123bA300D4B555b0182a69faFB59322FC9', 28009);
  // let a = await query(contracts.U, 'exchangeToken', [0, [28009]]);
  // let a = await queryCharacter(181332);
  // await queryMarket();
  await buyToken(404, 5n * BigInt(10 ** 18), 181332);
  // let a = await queryRoles();
  // let a = await queryToken(133541);
  // console.log('a', a);
}

// sellToken();
// queryLuckyStone(address);
// queryRoles()
test()