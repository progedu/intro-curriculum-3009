'use strict';
const fs = require('fs');
const fileName = './test.txt';

// 元の関数
// for (let count = 0; count < 30; count++) {
//     fs.appendFile(fileName, '1-' + count + '\n', () => {});
//     fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => {});
//     fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => {});
//     fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => {});
// }

// appendFileSync を利用
// for (let count = 0; count < 30; count++) {
//     fs.appendFileSync(fileName, '2-' + count + '\n', () => {});
//     fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
//     fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
//     fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
// }

// promise と async/await を利用
function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}

async function main() {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, '3-' + count + '\n');
        await appendFilePromise(fileName, 'おはようございます\n');
        await appendFilePromise(fileName, 'こんにちは\n');
        await appendFilePromise(fileName, 'こんばんは\n');
    }
}

main()
