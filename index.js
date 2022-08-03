const config = require('config');
const sa = require('./sa');
const { sleep } = require('./utils');
const Logic = require('./logic');

async function main() {
    // console.log(await sa.queryLuckyStone('0x9B305B2E6dB48a28fe0A53265290b8FFFbA346A3'));
    let logic = new Logic();
    while (true) {
        await logic.mainLoop();
        await sleep(config.get('CHECK_INTERVAL'));
    }
}

main()