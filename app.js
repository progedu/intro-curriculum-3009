'use strict';
const fs = require('fs');
const fileName = './test.txt';

const appendFilePromise = (fileName, str) => {
    return new Promise(resolve => fs.appendFile(fileName, str, 'utf8', () => resolve()))
}

const main = async () => {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'おはようございます\n')
        await appendFilePromise(fileName, 'こんにちは\n')
        await appendFilePromise(fileName, 'こんばんは\n')
    }
}

main()