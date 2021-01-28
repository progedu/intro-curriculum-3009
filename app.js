'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', function(error, result){});
    fs.appendFileSync(fileName, 'こんにちは\n', function(error, result){});
    fs.appendFileSync(fileName, 'こんばんは\n', function(error, result){});
}
