'use strict';
const fs = require('fs');
const fileName = './test.txt';
function appendFilePromise(fileName, src) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, src, 'utf8', () => resolve());
    }); 
}

async function main() {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'おはようございます\n');
        await appendFilePromise(fileName, 'こんにちは\n');
        await appendFilePromise(fileName, 'こんばんは\n');
    }
}

main();
