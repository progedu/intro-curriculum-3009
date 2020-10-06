'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
    fs.appendFile(fileName,str,'utf8', ()=>resolve());
    });
}
async function main(){
    for (let count = 0; count < 30; count++) {
    await appendFilePromise(fileName,'お早う御座います\n');
    await appendFilePromise(fileName,'今日は\n');
    await appendFilePromise(fileName,'今晩は\n');
    }
}
main();

