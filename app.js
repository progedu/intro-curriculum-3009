'use strict';
const fs = require('fs');
const fileName = './test.txt';

// 同期、非同期関数利用
// for (let count = 0; count < 30; count++) {
//     fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
//     fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
//     fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
//     fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => {});
//     fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => {});
//     fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => {});
// }

function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}

// Promise利用
// NG: appendFilePromise実行後thenに行く前に次のループ処理に入ってしまう
// for (let count = 0; count < 30; count++) {
//     appendFilePromise(fileName, 'おはようございます\n')
//         .then(() => {
//             return appendFilePromise(fileName, 'こんにちは\n');
//         })
//         .then(() => {
//             return appendFilePromise(fileName, 'こんばんは\n');
//         });
// }

// OK: Promiseの1まとまりの処理を変数で管理する
// let promise = new Promise(resolve => resolve());

// for (let count = 0; count < 30; count++) {
//     // thenが終わるまで次のループに入らないようにする
//     promise = promise.then(() => appendFilePromise(fileName, 'おはようございます\n'))
//         .then(() => appendFilePromise(fileName, 'こんにちは\n'))
//         .then(() => appendFilePromise(fileName, 'こんばんは\n'));
// }

// async/await利用
async function main() {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'おはようございます\n');
        await appendFilePromise(fileName, 'こんにちは\n');
        await appendFilePromise(fileName, 'こんばんは\n');
    }
}
main();