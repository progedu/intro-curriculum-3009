'use strict';
const fs = require('fs');
const fileName = './test.txt';
if (fs.existsSync(fileName)) {
    fs.unlink(fileName, () => { });
}

function appendFilePromise(str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}

function  main() {
    let promiseChain = Promise.resolve();
    for (let count = 0; count < 30; count++) {
        promiseChain = promiseChain
        .then(() => {
            return appendFilePromise(count + 'おはようございます\n');
        })
        .then(() => {
            return appendFilePromise(count + 'こんにちは\n');
        })
        .then(() => {
                appendFilePromise(count + 'こんばんは\n');
        });
    }   
}
main();
