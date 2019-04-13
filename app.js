'use strict';
// 同期 I/O と非同期 I/O
const fs = require('fs'); // Node.js で用意されているライブラリ fs(ファイルシステムモジュール)を読み込んでいる。ファイルの読み書きが出来る API。
const fileName = './test.txt'; // ファイル名。./ で、現在のディレクトリやフォルダーに test.txt というファイルを使っていく。
for (let count = 0; count < 30; count++) { // 30回ループする。
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8'); // appendFile 関数で追記(無かったら作る)する。fileName で現在のディレクトリまたは
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8'); // フォルダの中の ./test.txt に、'あ'の文字列を、文字化けしない'utf8'の文字コードで出力。
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8'); // \n で改行。appendFile + Sync で非同期から同期に変更。
}