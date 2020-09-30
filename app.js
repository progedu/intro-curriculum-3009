'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName,str){
    return new Promise((resolve) => {
        fs.appendFile(fileName,str,'utf8',()=>resolve());
    })
}

async function main(){
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'おはようございます\n', 'utf8');
        await appendFilePromise(fileName, 'こんにちは\n', 'utf8');
        await appendFilePromise(fileName, 'こんばんは\n', 'utf8');
    }
}

main();

// for (let count = 0; count < 30; count++) {
//     appendFilePromise(fileName, 'おはようございます\n')
//         .then(()=>{
//             return appendFilePromise(fileName, 'こんにちは\n');
//         })
//             .then(()=>{
//                 return  appendFilePromise(fileName, 'こんばんは\n');
//             })
// }

// for (let count = 0; count < 30; count++) {
//     fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
//     fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
//     fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
// }


