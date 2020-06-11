'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'おはようございます、胃もたれしやすいので朝ご飯は抜くかな。\n', 'utf8');
    fs.appendFileSync(fileName, 'こんにちは、朝を抜いたのでお腹がすいた！かつ丼食べたい！\n', 'utf8');
    fs.appendFileSync(fileName, 'こんばんは、風呂入って寝る！歯も磨かなきゃ！\n', 'utf8');
    console.log(`count = ${count}`);
}
