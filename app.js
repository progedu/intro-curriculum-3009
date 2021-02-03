'use strict';
const fs = require('fs');
const fileName = './test.txt';

// appendFileSync 利用
for (let count = 0; count < 30; count++) {
    fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
    fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
    fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
}

// async/await 利用
const outputToFile = (text) => {
    fs.appendFile(fileName, text, 'utf8', () => {});
}
async function main() {
    for (let count = 0; count < 30; count++) {
        await outputToFile('おはようございます\n');
        await outputToFile('こんにちは\n');
        await outputToFile('こんばんは\n');
    }
}
main();