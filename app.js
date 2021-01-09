'use strict';
const fs = require('fs');
const { resolve } = require('path');
const fileName = './test.txt';

//
// Promise Chain
//
function  appendFilePromiseChain(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    })
}

function main1() {
    for(let count = 0; count < 30; count++){
        appendFilePromiseChain(fileName, 'Good Morning\n')
            .then(() => {
                return appendFilePromiseChain(fileName, 'Hello\n');
            })
            .then(() => {
                return appendFilePromiseChain(fileName, 'Good Evening\n');
            });
    }    
}

//
// async / await ver.
//
function appendFilePromise(filename, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}

async function main2() {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'おはようございます\n');
        await appendFilePromise(fileName, 'こんにちは\n');
        await appendFilePromise(fileName, 'こんばんは\n');
    }    
}

main1();