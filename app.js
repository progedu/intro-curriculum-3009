'use strict';
const fs = require('fs');
const fileName = './test.txt';
fs.writeFileSync(fileName, 'おはようございます', 'utf8');
fs.writeFileSync(fileName, 'こんにちは', 'utf8');
fs.writeFileSync(fileName, 'こんばんは', 'utf8');
