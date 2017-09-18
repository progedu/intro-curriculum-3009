'use strict';
const fs = require('fs');
const fileName = './test.txt';
const fileBoolean = fs.existsSync(fileName);

if (fileBoolean == true) {
    fs.unlink(fileName);//fileが初めからあるとtrueで削除
    console.log('file delete');
} else {
    console.log('file not delete');
}

console.log('file created');

for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
}
