'use strict';
const fs = require('fs');
const fileName = './test.txt';

async function main(){
    for (let count = 0; count < 30; count++) {
       await fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
       await fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
       await fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
    }
}

main();
