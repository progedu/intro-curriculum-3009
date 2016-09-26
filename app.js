'use strict';
const fs = require('fs');
const fileName = './test.txt';
fs.appendFile(fileName, 'おはようございます\n', 'utf8');
fs.appendFile(fileName, 'こんにちわ\n', 'utf8');
fs.appendFile(fileName, 'こんばんわ\n', 'utf8');
