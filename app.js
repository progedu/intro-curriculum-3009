/* 'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => {});
    fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => {});
    fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => {});
} */


// appendFileSyncの利用
/* 'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}
 */

// Promiseのみを用いる場合
/* 'use strict';
const fs = require('fs');
const fileName = './test.txt';
function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}
function main() {
    let promiseChain = Promise.resolve(); // Promise チェーンを記憶する変数
    for (let count = 0; count < 500; count++) {
        promiseChain = promiseChain
        .then(() => {
            return appendFilePromise(fileName, 'おはようございます\n');
        })
        .then(() => {
            return appendFilePromise(fileName, 'こんにちは\n');
        })
        .then(() => {
            return appendFilePromise(fileName, 'こんばんは\n');
        });
    }
}
main(); */

// async/awaitを用いる場合
'use strict'
const fs = require('fs');
const { resolve } = require('path');
const fileName = './test.txt';

function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}
async function main() {
    for (let count = 0; count < 500; count++) {
        await appendFilePromise(fileName, 'あ');
        await appendFilePromise(fileName, 'い');
        await appendFilePromise(fileName, 'う');
        await appendFilePromise(fileName, 'え');
        await appendFilePromise(fileName, 'お');
        await appendFilePromise(fileName, '\n');
    }
}

main();