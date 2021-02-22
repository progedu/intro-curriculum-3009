'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFileAsync (fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}

async function main(){
    for (let count = 0; count < 30; count++) {
        await appendFileAsync(fileName, 'おはようございます\n');
        await appendFileAsync(fileName, 'こんにちは\n');
        await appendFileAsync(fileName, 'こんばんは\n');
    }
}

main();


