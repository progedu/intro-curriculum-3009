'use strict';
const fs = require('fs'); // fsモジュールの呼び出し
const fileName = './test.txt'; // test.txtというファイルを変数に入れる、無ければファイルが作成される

// fsモジュールに用意された appenFile関数に Syncという修飾子を付けて使用した場合
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
}

// async/await 構文を使った場合
function gear(file, str) {
    return new Promise((resolve) => {
        fs.appendFile(file, str, 'utf8', () => resolve()); // awaitを使う時はappendFile関数のコールバック関数の指定にresolveを返す
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