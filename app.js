'use strict';
const fs = require('fs');
const fileName = './test.txt';
fs.writeFileSync(fileName, 'おはようございます', 'utf8');
fs.writeFileSync(fileName, 'こんにちわ', 'utf8');
fs.writeFileSync(fileName, 'こんばんわ', 'utf8');
