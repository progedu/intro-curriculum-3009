'use strict';
const fs = require('fs');
const fileName = './test.txt';
console.time('文字の読込処理時間');
for (let count = 0; count < 50; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
    console.log(` count = ${count}`);
}
console.assert(fileName, 'ファイルの読込に失敗しました。');
console.timeLog('文字の読込処理時間');
