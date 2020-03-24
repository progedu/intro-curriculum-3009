'use strict';
const fs = require('fs');
const fileName = './test.txt';
console.time('ファイルの読込処理');
for (let count = 0; count < 50; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
    console.log(` count = ${count}`);
}
console.timeEnd('ファイルの読込処理');