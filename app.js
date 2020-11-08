'use strict';
const fs = require('fs');
const fileName1 = './test.txt1';
const fileName2 = './test.txt2';
const fileName3 = './test.txt3';

// appendFileSync を使った場合
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName1, 'おはようございます\n', 'utf8');
    fs.appendFileSync(fileName1, 'こんにちは\n', 'utf8');
    fs.appendFileSync(fileName1, 'こんばんは\n', 'utf8');
}

function appendFilePromise(filePath, str) {
    return new Promise((resolve) => {
        fs.appendFile(filePath, str, 'utf8', () =>  resolve())
    })
}

// async/await を使った場合
async function main1() {
    for (let count =  0; count < 30; count++) {
        await appendFilePromise(fileName2, 'おはようございます\n');
        await appendFilePromise(fileName2, 'こんにちは\n');
        await appendFilePromise(fileName2, 'こんばんは\n');
    }
}
main1();

function main2() {
  // 変数に入れる
  // Promise.resolve は resolve が呼ばれた状態の Promise オブジェクトを返す関数
  let promiseChain = Promise.resolve(); // Promise チェーンを記憶する変数
  for (let count = 0; count < 500; count++) {
    promiseChain = promiseChain
      .then(() => {
        return appendFilePromise(fileName3, 'おはようございます\n');
      })
      .then(() => {
        return appendFilePromise(fileName3, 'こんにちは\n');
      })
      .then(() => {
        return appendFilePromise(fileName3, 'こんばんは\n');
      });
  }
}
main2();

