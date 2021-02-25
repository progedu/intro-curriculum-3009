'use strict';
const fs = require('fs');
const fileName = './test.txt';
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
function main() {
  let promiseChain = Promise.resolve(); // Promise チェーンを記憶する変数
  for (let count = 0; count < 500; count++) {
    promiseChain = promiseChain
      .then(() => {
        return appendFilePromise(fileName, 'おはようございます\n');
      })
      .then(() => {
        return appendFilePromise(fileName, 'こんにちは\n');
      })
      .then(() => {
        return appendFilePromise(fileName, 'こんばんは\n');
      });
  }
}
main();