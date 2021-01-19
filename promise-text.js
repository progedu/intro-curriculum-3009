'use strict';
const fs = require('fs');
const fileName = './test.txt';
function appendFilepromise(fileName, str) {
    return new Promise((resolve) => {
fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}
async function main() {
for (let count = 0; count < 30; count++) {
   await appendFilepromise(fileName, 'おはようございます\n');
   await appendFilepromise(fileName, 'こんにちは\n');
   await appendFilepromise(fileName, 'こんばんは\n');
}
}
main();