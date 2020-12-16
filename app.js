'use strict';

// case1: appendFileSync
// const fs = require('fs');
// const fileName = './test.txt';
// for (let count = 0; count < 30; count++) {
//   fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
//   fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
//   fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
// }

// // case2: Promiseチェイン
// const fs = require('fs');
// const fileName = './test.txt';
// function appendFilePromise(fileName, str) {
//   return new Promise((resolve) => {
//     fs.appendFile(fileName, str, 'utf8', () => resolve());
//   });
// }
// function main() {
//   let PromiseChain = Promise.resolve();
//   for (let count = 0; count < 30; count++) {
//     PromiseChain = PromiseChain.then(() => {
//       return appendFilePromise(fileName, 'おはようございます\n');
//     })
//       .then(() => {
//         return appendFilePromise(fileName, 'こんにちは\n');
//       })
//       .then(() => {
//         return appendFilePromise(fileName, 'こんばんは\n');
//       });
//   }
// }
// main();

// case3: async/await
const fs = require('fs');
const fileName = './test.txt';

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
  }
}

main();
