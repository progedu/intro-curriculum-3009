'use strict';
const fs = require('fs');
const fileName = './test.txt';

/**
 * ファイルの名前を渡すと挨拶を書き込む関数（appendFileSync関数を使用）
 * @param {string} fileName ファイルの名前
 */
function greetBySyncFunc(fileName) {
    console.log("Greet by appendFileSync");
    for (let count = 0; count < 30; count++) {
        fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => {});
        fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
        fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => {});
    }
}

/**
 * 指定のファイルの名前で文字列を書き込む関数
 * @param {string} fileName ファイルの名前
 * @param {string} str ファイルに書き込む文字列
 */
function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}

/**
 * ファイルの名前を渡すと挨拶を書き込む関数（Promiseを使用）
 * @param {string} fileName ファイルの名前
 */
function greetByPromise(fileName) {
    console.log("Greet by Promise");
    let promiseChain = Promise.resolve(); // Promise チェーンを記憶する変数
    for (let count = 0; count < 30; count++) {
        promiseChain = promiseChain
            .then(() => appendFilePromise(fileName, 'おはようございます\n'))
            .then(() => appendFilePromise(fileName, 'こんにちは\n'))
            .then(() => appendFilePromise(fileName, 'こんばんは\n'));
    }
}

/**
 * ファイルの名前を渡すと挨拶を書き込む関数（async/awaitを使用）
 * @param {string} fileName ファイルの名前
 */
async function greetByAsyncAwait(fileName) {
    console.log("Greet by async/await");
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'おはようございます\n');
        await appendFilePromise(fileName, 'こんにちは\n');
        await appendFilePromise(fileName, 'こんばんは\n');
    }
}

const howToGreet = process.argv[2] || "appendFileSync";
switch (howToGreet) {
    case "appendFileSync":
        greetBySyncFunc(fileName);
        break;
    case "Promise":
        greetByPromise(fileName);
        break;
    case "async-await":
        greetByAsyncAwait(fileName);
        break;
    default:
        greetBySyncFunc(fileName);
        break;
}