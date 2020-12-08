'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(filename, str) {
    return new Promise((resolve) => {
        fs.appendFile(filename, str, 'utf8', () => resolve());
    });
}

async function main() {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'おはようございます\n')
        await appendFilePromise(fileName, 'こんにちは\n');
        await appendFilePromise(fileName, 'こんばんは\n');
    }
}

main();
