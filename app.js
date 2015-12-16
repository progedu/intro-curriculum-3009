'use strict';
let fs = require('fs');
let fileName = './test.txt';
fs.writeFile(fileName, 'おはようございます', 'utf8');
fs.writeFile(fileName, 'こんにちわ', 'utf8');
fs.writeFile(fileName, 'こんばんわ', 'utf8');
