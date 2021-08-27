'use strict';

function callback() 
{
    return 0;
}

const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFile(fileName, 'おはようございます\n', 'utf8', callback);
    fs.appendFile(fileName, 'こんにちは\n', 'utf8', callback);
    fs.appendFile(fileName, 'こんばんは\n', 'utf8', callback);
}
