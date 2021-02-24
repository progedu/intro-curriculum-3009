'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName,str){
    return new Promise((resolve) => {
        fs.appendFile(fileName,str,'utf8', () => resolve());
    });
}

async function main(){
    for(let count = 0; count < 30; count++){
        await appendFilePromise(fileName,'おはようございます\n');
        await appendFilePromise(fileName,'こんにちは\n');
        await appendFilePromise(fileName,'こんばんは\n');
    }
}

main();










/*
const fs = require('fs');
const fileName = './test.txt';

for(let count = 0; count < 30; count++){
    new Promise((resolve) => {
        const morning = 'おはようございます\n';
        resolve(morning);
    }).then((v1) => {
        new Promise((resolve) => {
            const noon = v1 + 'こんにちは\n';
            resolve(noon);
        }).then((v2) => {
            new Promise((resolve) => {
                const night = v2 + 'こんばんは\n';
                fs.appendFile(fileName,night,'utf8',() => {});
                resolve(night);
            })
        })
    })
}

*/








/*
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
    fs.appendFile(fileName, 'おはようございます\n', 'utf8', () => {});
    fs.appendFile(fileName, 'こんにちは\n', 'utf8', () => {});
    fs.appendFile(fileName, 'こんばんは\n', 'utf8', () => {});
}
*/