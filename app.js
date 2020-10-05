'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
      fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}
  
for (let count = 0; count < 30; count++) {
    appendFilePromise(fileName, 'おはようございます\n')
    .then(() => {
        return appendFilePromise(fileName, 'こんにちは\n');
    }).then(() => {
        return appendFilePromise(fileName, 'こんばんは\n');
    });
}
