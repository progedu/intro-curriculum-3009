'use strict';
const fs = require('fs');
const fileName = './test.txt';
fs.writeFile(fileName, 'おはようございます', 'utf8');
fs.writeFile(fileName, 'こんにちわ', 'utf8');
fs.writeFile(fileName, 'こんばんわ', 'utf8');
