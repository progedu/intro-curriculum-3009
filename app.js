'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
    fs.appendFileSync(fileName,'さようなら\n','utf8');
    fs.appendFileSync(fileName,'また明日\n','utf8');
    fs.appendFileSync(fileName,'あ\n','utf8');
    fs.appendFileSync(fileName,'   い\n','utf8');
    fs.appendFileSync(fileName,'      う\n','utf8');
    fs.appendFileSync(fileName,'         え\n','utf8');
    fs.appendFileSync(fileName,'            お\n','utf8');
 

}
