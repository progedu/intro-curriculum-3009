'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName,str){
    /**
     * 非同期処理でpromiseを扱い、ファイルに指定されたstrを書き込む。
     * @param {string} fileName ファイルの名前
     * @param {string} str 書き込む文字列
     * @return {Promise}
     */
    return new Promise((resolve) =>{
        fs.appendFile(fileName,str,'utf8', () => resolve());
    })
}

async function main(){
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'おはようございます\n');
        await appendFilePromise(fileName, 'こんにちは\n');
        await appendFilePromise(fileName, 'こんばんは\n');
      }
}

main()