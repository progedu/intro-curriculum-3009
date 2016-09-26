'use strict';
const fs = require('fs');
const fileName = './test.txt';
fs.appendFile(fileName, 'おはようございます', 'utf8');
fs.appendFile(fileName, 'こんにちわ', 'utf8');
fs.appendFile(fileName, 'こんばんわ', 'utf8');
