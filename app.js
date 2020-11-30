'use strict';
const fs = require('fs');
const fileName = './test(appendFileSync).txt';
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}
//ここまでappendFileSyncの記法

const fileName2 = './test2(onlyPromise).txt';
function appendFilePromise(fileName2, str) {
    return new Promise ((resolve) => {
        fs.appendFile(fileName2, str, 'utf8', () => resolve());
    });
}
function main() {
    let promiseChain = Promise.resolve(); //Promise チェーンを記憶する変数
    for (let count = 0; count < 30; count++) {
        promiseChain = promiseChain
            .then(() => {
                return appendFilePromise(fileName2, 'おはようございます\n');
            })
            .then(() => {
                return appendFilePromise(fileName2, 'こんにちは\n');
            })
            .then(() => {
                return appendFilePromise(fileName2, 'こんばんは\n');
            });
    }
}
main();
//ここまでPromiseのみの記法

const fileName3 = './test3(async,await).txt';
function appendFilePromise2(fileName3, str) {
    return new Promise((resolve, reject) => {
        fs.appendFile(fileName3, str, 'utf8', () => resolve());
    });
}
async function main2() {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise2(fileName3, 'おはようございます\n');
        await appendFilePromise2(fileName3, 'こんにちは\n');
        await appendFilePromise2(fileName3, 'こんばんは\n');
    }
}
main2();
//ここまでasync/awaitの記法