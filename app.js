'use strict';
const fs = require('fs');
const fileName = './test.txt';
function appendFilePromise(fileName, str, encoding) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, encoding, () => resolve()); // resolve が呼ばれると Prommise の処理が終わる。
  });
}
async function main() {
  for (let count = 0; count < 30; count++) {
    await appendFilePromise(fileName, 'おはようございます\n', 'utf8');
    await appendFilePromise(fileName, 'こんにちは\n', 'utf8');
    await appendFilePromise(fileName, 'こんばんは\n', 'utf8');
  }
}

main();
