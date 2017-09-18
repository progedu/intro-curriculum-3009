'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, '(*^-^*)｜お・は・よ・う・！｜(*^-^*)\n', 'utf8');
    fs.appendFileSync(fileName, '(#^.^#)｜こ・ん・に・ち・は｜(#^.^#)\n', 'utf8');
    fs.appendFileSync(fileName, '(*^_^*)｜こ・ん・ば・ん・は｜(*^_^*)\n', 'utf8');
    fs.appendFileSync(fileName, '(*´ω`*)｜お・や・す・み・ｚ｜(*´ω`*)\n', 'utf8');
}　