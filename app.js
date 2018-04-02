'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, "おはようございます\n", 'utf8');
    fs.appendFileSync(fileName, "こんにちは", 'utf8')
    fs.appendFileSync(fileName, "こんばんは", 'utf8')
    fs.appendFileSync(fileName, "さようなら", 'utf8')
}