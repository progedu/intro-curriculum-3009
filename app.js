'use strict';
const fs = require('fs'); //ファイルシステムを取り扱うモジュールを読み込んでいるコード
const fileName = './test.txt'; //test.txt というファイルに書き込む
for (let count = 0; count < 30; count++) { //30回書き込む。\nは改行
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
}
