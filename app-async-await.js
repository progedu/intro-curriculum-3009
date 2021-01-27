'use strict';
const fs = require('fs');
const fileName = './test.txt';
if (fs.existsSync(fileName)) {
    fs.unlink(fileName, () => { });
}

function appendFilePromise(str) {
    return new Promise((resolve)=>{
        fs.appendFile(fileName, str, 'utf8', () => {resolve()});
    })
}

async function main() {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(count+'おはようございます\n');
        await appendFilePromise(count+'こんにちは\n');
        await appendFilePromise(count+'こんばんは\n');
    }   
}

main();
