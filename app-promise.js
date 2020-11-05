'use strict';
const fs = require('fs');
const fileName = './test-promise.txt';

function appendFilePromise(fileName, str) {
  // Promise オブジェクトを作成
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
};

function main() {
  let promiseChain = Promise.resolve();    // Promise チェーンを記憶する（Promise の resolve プロパティを呼ぶ）
  for (let count = 0; count < 50; count++) {
    promiseChain = promiseChain
      .then(() => {
        return appendFilePromise(fileName, 'おはようございます\n')
      })
      .then(() => {
        return appendFilePromise(fileName, 'こんにちは\n')
      })
      .then(() => {
        return appendFilePromise(fileName, 'こんばんは\n')
      });
  }
};

// メインファンクションを実行
main();
