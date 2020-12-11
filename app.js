'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise (fileName, str) {
    return new Promise ((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    })
}

async function main (){
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'promiseおはようございます\n');
        await appendFilePromise(fileName, 'promiseこんにちは\n');
        await appendFilePromise(fileName, 'promiseこんばんは\n');
    }
   
}
//
main();

// for (let count = 0; count < 30; count++) {
//     fs.appendFileSync(fileName, 'Syncおはようございます\n', 'utf8');
//     fs.appendFileSync(fileName, 'Syncこんにちは\n', 'utf8');
//     fs.appendFileSync(fileName, 'Syncこんばんは\n', 'utf8');
// }

// for (let count = 0; count < 30; count++) {
//     fs.appendFile(fileName, 'おはようございます\n', 'utf8',() => {});
//     fs.appendFile(fileName, 'こんにちは\n', 'utf8',() => {});
//     fs.appendFile(fileName, 'こんばんは\n', 'utf8',() => {});
// }
