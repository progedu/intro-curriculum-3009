'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
<<<<<<< HEAD
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
=======
    fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => {});
    fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => {});
    fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => {});
>>>>>>> 7caff2d498534787740219e31ac154f5c2fb41c3
}
