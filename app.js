'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'Good morning\n', 'utf8');
    fs.appendFileSync(fileName, 'Hello\n', 'utf8');
    fs.appendFileSync(fileName, 'Good evening\n', 'utf8');
}
