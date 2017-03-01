'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let i = 0; i < 100; i++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
};
