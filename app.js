'use strict';
const fs = require('fs');
const fileName = './test.txt';

// for (let count = 0; count < 30; count++) {
//     fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
//     fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
//     fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
// }


// async function main() {
//     for (let count = 0; count < 30; count++) {
//         await fs.appendFileSync(fileName, 'おはよう\n', 'utf8', () => {});
//         await fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => {});
//         await fs.appendFileSync(fileName, 'こんばんは\n', 'utf8',);
//     };
// };
// main();


function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}
async function main() {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'おはよう\n');
        await appendFilePromise(fileName, 'こんにちは\n');
        await appendFilePromise(fileName, 'こんばんは\n');
        await appendFilePromise(fileName, `${count + 1}\n`);
    };
};
main();