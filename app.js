'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, '赤とんぼ\n', 'utf8');
    fs.appendFileSync(fileName, '筑波に雲も\n', 'utf8');
    fs.appendFileSync(fileName, 'なかりけり\n', 'utf8');
}
