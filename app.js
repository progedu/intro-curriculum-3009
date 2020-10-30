'use strict';
const fs = require('fs');
const fileName = './test.txt';

function makeFile(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf-8', () => resolve())
    });
 }

async function main() {
    for (let count = 0; count < 30; count++){
        await makeFile(fileName, 'おはようございます\n');
        await makeFile(fileName, 'こんにちは\n');
        await makeFile(fileName, 'こんばんは\n');
    }
}
 
main();