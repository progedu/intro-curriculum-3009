'use strict';
const fs = require('fs');
const fileName = './test.txt';
fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
