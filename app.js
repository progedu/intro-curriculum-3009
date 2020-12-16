'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFileSync(fileName, str, 'utf-8', () => resolve());
  });
}

async function main() {
  for (let count = 0; count < 30; count++) {
    await fs.appendFileSync(fileName, 'おはようございます\n');
    await fs.appendFileSync(fileName, 'こんにちは\n');
    await fs.appendFileSync(fileName, 'こんばんは\n');
  }
}

main()