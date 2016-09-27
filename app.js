'use strict';
const fs = require('fs');
const fileName = './test.txt';
fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
fs.appendFileSync(fileName, 'こんにちわ\n', 'utf8');
fs.appendFileSync(fileName, 'こんばんわ\n', 'utf8');

fs.appendFileSync(fileName, 'hello\n', 'utf8');
fs.appendFileSync(fileName, 'see you\n', 'utf8');
fs.appendFileSync(fileName, 'hi\n', 'utf8');
fs.appendFileSync(fileName, 'thanks\n', 'utf8');

fs.appendFileSync(fileName, 'はらへった\n', 'utf8');
fs.appendFileSync(fileName, 'いただきます\n', 'utf8');
fs.appendFileSync(fileName, 'ごちそうさまでした\n', 'utf8');
fs.appendFileSync(fileName, 'おやすみなさい\n', 'utf8');

