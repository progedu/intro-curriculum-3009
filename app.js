'use strict';
const fs = require('fs');
const fileName = './test.txt';

async function main() {
    for (let count = 0; count < 30; count++) {
        await
            new Promise((resolve) => {
                fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => { resolve() })
            });
        await
            new Promise((resolve) => {
                fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => { resolve() })
            });
        await
            new Promise((resolve) => {
                fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => { resolve() })
            });
    }
}

main();
