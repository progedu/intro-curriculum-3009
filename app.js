'use strict';

//元の記述
// const fs = require('fs');
// const fileName = './test.txt';
// for (let count = 0; count < 30; count++) {
//   fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => {});
//   fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => {});
//   fs.appendFile(fileName, 'こんばんは\n\n', 'utf8', () => {});
// }

/**
 * appendFile の代わりに appendFileSync を利用
 */
// const fs = require('fs');
// const fileName = './test.txt';
// for (let count = 0; count < 30; count++) {
//     fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
//     fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
//     fs.appendFileSync(fileName, 'こんばんは\n\n', 'utf8');
// }



/**
 * appendFileSync を使わずに Promise のみを用いた場合
 * ※うまくいかない　なんで？
 */
// const fs = require('fs');
// const fileName = './test.txt';

// function appendFilePromise(fileName, str) {
//     return new Promise((resolve) => {
//       fs.appendFile(fileName, str, 'utf8', () => resolve());
//     });
//   }

// for (let count = 0; count < 10; count++) {
//     appendFilePromise(fileName, 'おはようございます\n')
//       .then(() => {
//         return appendFilePromise(fileName, 'こんにちは\n');
//       })
//       .then(() => {
//         return appendFilePromise(fileName, 'こんばんは\n');
//       });
//   }

/**
 * async/await構文
 */
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
      fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
  }

async function main(){
    for (let count = 0 ; count < 30; count++){
        await appendFilePromise(fileName, 'おはようございます\n');
        await appendFilePromise(fileName, 'こんにちは\n');
        await appendFilePromise(fileName, 'こんばんは\n\n');
    }
}

main();