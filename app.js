'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName, str1, str2) {
    return new Promise((resolve, reject) => {
        fs.appendFile(fileName, str1, str2, () => resolve());
    });
}

async function main() {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'おはようございます\n', 'utf8');
        await appendFilePromise(fileName, 'こんにちは\n', 'utf8');
        await appendFilePromise(fileName, 'こんばんは\n', 'utf8');
    }
}

main();