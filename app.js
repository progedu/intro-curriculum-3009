'use strict';
const fs = require('fs');
const fileName = './test.txt';

// #1 同期関数利用
/* 
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}
 */

// #2 Promise利用
/* 
function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}
function main() {
    let promisChain = Promise.resolve();
    for (let count = 0; count < 30; count++) {
        promisChain = promisChain
            .then(() => {
                appendFilePromise(fileName, 'おはようございます\n')
            })
            .then(() => {
                return appendFilePromise(fileName, 'こんにちは\n');
            })
            .then(() => {
                return appendFilePromise(fileName, 'こんばんは\n');
            })
    };
}
 */

 // #3 async/await利用
function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}
async function main() {
    for (let count = 0; count < 30; count++) {
                await appendFilePromise(fileName, 'おはようございます\n');
                await appendFilePromise(fileName, 'こんにちは\n');
                await appendFilePromise(fileName, 'こんばんは\n');
    };
}


main();

