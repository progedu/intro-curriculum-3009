'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFileSync(fileName, str, 'utf8', () => resolve());
    });
}

function main() {
    for (let count = 0; count < 30; count++) {
        appendFilePromise(fileName, 'おはようございます\n', () => { });
        appendFilePromise(fileName, 'こんにちは\n', () => { });
        appendFilePromise(fileName, 'こんばんは\n', () => { });
    }
}

main();