'use strict';
const fs = require('fs');
const fileName = './test.txt';
fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
fs.appendFileSync(fileName, 'こんにちわ\n', 'utf8');
fs.appendFileSync(fileName, 'こんばんわ\n', 'utf8');