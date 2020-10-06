'use strict';
const fs = require('fs');
const fileName = './test.txt';

//appendFileSyncの場合
//for (let count = 0; count < 30; count++) {
//    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
//    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
//    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
//    fs.appendFileSync(fileName, '----------\n', 'utf8', () => {});
//}


//プロミスの場合
//function appendFilePromise(fileName, str) {
//    return new Promise((resolve) => {
//      fs.appendFile(fileName, str, 'utf8', () => resolve());
//    });
//  }
//  
//  let promise = new Promise((resolve) => { resolve(); }); // Promise の状態を変数としてもつ
//  
//  for (let count = 0; count < 30; count++) {
//      promise = promise.then(() => {
//        return appendFilePromise(fileName, 'おはようございます\n');
//      })
//      .then(() => {
//        return appendFilePromise(fileName, 'こんにちは\n');
//      })
//      .then(() => {
//        return appendFilePromise(fileName, 'こんばんは\n');
//      })
//      .then(() => {
//        return appendFilePromise(fileName, '----------\n');
//      });
//  }


//asyncの場合
function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}
async function main() {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'おはようございます\n');
        await appendFilePromise(fileName, 'こんにちは\n');
        await appendFilePromise(fileName, 'こんばんは\n');
        await appendFilePromise(fileName, '----------\n');
    }
}

main();