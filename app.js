'use strict';
const fs = require('fs');
const fileName = './test.txt';
function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
      fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
  }
  async function main() {
    for (let count = 0; count < 30; count++) {
      await appendFilePromise(fileName, 'おはようございます\n', 'utf8',);
      await appendFilePromise(fileName, 'こんにちは\n', 'utf8',);
      await appendFilePromise(fileName, 'こんばんは\n', 'utf8',);
      console.log(`count =${count}`);
    }
  }
  
  main();
