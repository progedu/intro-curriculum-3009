'use strict';
const fs = require('fs');
const fileName = './test.txt';
function appendFilePromise(str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}
async function main() {
    for (let count = 0; count < 500; count++) {
            await appendFilePromise('おはようございます\n');
            await appendFilePromise('こんにちは\n');
            await appendFilePromise('こんばんわ\n');
        };
}
main();