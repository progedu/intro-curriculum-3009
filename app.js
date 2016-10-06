'use strict';
const fs = require('fs');
const fileName = './test.txt';
fs.appendFile(fileName, 'おはようございます\n', 'utf8');
fs.appendFile(fileName, 'こんにちは\n', 'utf8');
fs.appendFile(fileName, 'こんばんは\n', 'utf8');
