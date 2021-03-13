'use strict';
//非同期I/Oの場合(出力バラバラ)
// const fs = require('fs');
// const fileName = './test.txt';
// for (let count = 0; count < 30; count++) {
//     fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => {});
//     fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => {});
//     fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => {});
// }

//同期I/O appendFileSync の場合
// const fs = require('fs');
//  const fileName = './test.txt';
// for (let count = 0; count < 30; count++) {
//     fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
//     fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
//     fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
// }

//以下すべて非同期記述
//Promise のみを用いた場合(誤った出力) おはよう全部->こんにちは全部->こんばんわ全部が出力
// const fs = require('fs');
// const fileName = './test.txt';

//  function appendFilePromise(fileName, str) {
//     return new Promise((resolve) => {
//       fs.appendFile(fileName, str, 'utf8', () => resolve());
//     });
//   }

// for (let count = 0; count < 30; count++) {
//     appendFilePromise(fileName, 'おはようございます\n')
//     .then(() => {
//       return appendFilePromise(fileName, 'こんにちは\n');
//     })
//     .then(() => {
//       return appendFilePromise(fileName, 'こんばんは\n');
//     });
// }

//Promiseのみを用いた場合(正しい出力)
// const fs = require('fs');
// const fileName = './test.txt';
// function appendFilePromise(fileName, str) {
//   return new Promise((resolve) => {
//     fs.appendFile(fileName, str, 'utf8', () => resolve());
//   });
// }
// function main() {
//   let promiseChain = Promise.resolve(); // Promise チェーンを記憶する変数
//   for (let count = 0; count < 500; count++) {
//     promiseChain = promiseChain
//       .then(() => {
//         return appendFilePromise(fileName, 'おはようございます\n');
//       })
//       .then(() => {
//         return appendFilePromise(fileName, 'こんにちは\n');
//       })
//       .then(() => {
//         return appendFilePromise(fileName, 'こんばんは\n');
//       });
//   }
// }
// main();

//async/awaitを組み合わせた場合
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
async function main() {
  for (let count = 0; count < 500; count++) {
    await appendFilePromise(fileName, 'おはようございます\n');
    await appendFilePromise(fileName, 'こんにちは\n');
    await appendFilePromise(fileName, 'こんばんは\n');
  }
}

main();