'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}

async function main() {
    // let promiseChain = Promise.resolve(); // Promise チェーンを記憶する変数
    for (let count = 0; count < 30; count++) {
        
        // appendFile を使った例
    
        // fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => {});
        // fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => {});
        // fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => {});
    
    
        // appendFlieSync を使った例
    
        // fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
        // fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
        // fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
        
        // Promise を使った例

        // promiseChain = promiseChain
        //   .then(() => {
        //       return appendFilePromise(fileName, 'おはようございます\n');
        //   })
        //   .then(() => {
        //       return appendFilePromise(fileName, 'こんにちは\n');
        //   })
        //   .then(() => {
        //       return appendFilePromise(fileName, 'こんばんは\n');
        //   });

        await appendFilePromise(fileName, 'おはようございます\n');
        await appendFilePromise(fileName, 'こんにちは\n');
        await appendFilePromise(fileName, 'こんばんは\n');
    }
}

main();