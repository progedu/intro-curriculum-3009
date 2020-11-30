'use strict';
const fs = require('fs');
const fileName = './test-promise.txt';

function appendFilePromise(fileName, str) {
     return new Promise((resolve) => {
       fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
function appendFilePromises(count) {
  if (count <= 0) {
    return true;
  }
  appendFilePromise(fileName, 'おはようございます\n')
    .then(() => {
      return appendFilePromise(fileName, 'こんにちは\n');
    })
    .then(() => {
      return appendFilePromise(fileName, 'こんばんは\n');
    })
    .then(() => {
      return appendFilePromises(count - 1);
    });
}
appendFilePromises(10);