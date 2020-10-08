'use strict';
// fsモジュールに用意された appenFile関数に Syncという修飾子を付けて使用した場合
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
}

// async/await 構文を使った場合
function gear(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}

async function main() {
    for (let count = 0; count < 30; count++) {
        await gear(fileName, 'おはようございます\n');
        await gear(fileName, 'こんにちは\n');
        await gear(fileName, 'こんばんは\n');
    }
}

main();