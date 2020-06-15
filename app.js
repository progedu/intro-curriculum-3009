'use strict';
const fs = require('fs');    // ファイルを読み込むモジュールをインポート
const fileName = './test.txt';    // ファイル text.txt に書き込み（./ で同じディレクトリ配下に作成）
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');    // 非同期IOの際は引数にコールバック関数が必須
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');    // Syncを使う際はコールバック関数は不要
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
}
