'use strict';
const fs = require('fs');
const fileName = './test.txt';
// for (let count = 0; count < 30; count++) {
//     fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
//     fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
//     fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
// }

function appendFilepromise(fileName, str) {
  return new Promise(resolve => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
// let promise = new Promise(resolve => { resolve(); });
// for(let i = 0; i < 30; i++) {
//   promise = promise.then(() => {
//     return appendFilepromise(fileName, 'おはようございます\n');
//   }).then(() => {
//     return appendFilepromise(fileName, 'こんにちは\n');
//   }).then(() => {
//     return appendFilepromise(fileName, 'おばんです\n');
//   });
// }

async function main() {
  for (let count = 30; 0 < count; count--) {
    await appendFilepromise(fileName, `${count}\n`);
    await appendFilepromise(fileName, 'おはようございます\n');
    await appendFilepromise(fileName, 'こんにちは\n');
    await appendFilepromise(fileName, 'おばんです\n');
  };
}
main();
