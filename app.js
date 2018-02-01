'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, '1 おはようございます\n', 'utf8');
    fs.appendFileSync(fileName, '2 こんにちは\n', 'utf8');
    fs.appendFileSync(fileName, '3 こんばんは\n', 'utf8');
}
