//同期I/O
'use strict';
const fs = require('fs');
const fileName = './output.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
    fs.appendFileSync(fileName, 'おはよう\n', 'utf8');
    fs.appendFileSync(fileName, 'お早いですね\n', 'utf8');
}
