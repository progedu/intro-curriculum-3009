'use strict';
const fs = require('fs');
const fileName = './test.txt';

// async\await を使った同期処理の方法
    
    /*function appendFilePromise(fileName, str) {
        return new Promise((resolve) => {
            fs.appendFile(fileName, str, 'utf8', () => resolve());
        })
    }

    async function main() {
        for (let count = 0; count < 30; count++) {
            await appendFilePromise(fileName, 'おはようございます\n');
            await appendFilePromise(fileName, 'こんにちは\n');
            await appendFilePromise(fileName, 'こんばんは\n');
        }
    }

    main();
*/

// Promise を使った同期処理の方法
function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}

function main() {
    let promiseChain = Promise.resolve();
    for (let count = 0; count < 500; count++) {
        promiseChain = promiseChain
            .then(() => {
                return appendFilePromise(fileName, 'おはようございます\n');
            })
            .then(() => {
                return appendFilePromise(fileName, 'こんにちは\n');
            })
            .then(() => {
                return appendFilePromise(fileName, 'こんばんは\n');
            })
    }
}

main();