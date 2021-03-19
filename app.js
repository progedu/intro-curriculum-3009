'use strict';
const fs = require('fs');
const fileName = './test.txt';
/* function writeStr(fileName, str) {
    return new Promise( resolve => {
        fs.appendFile(fileName, `${str}\n`, 'utf8', () => {resolve()});
})
}
async function me() {
    for (let count = 0; count < 30; count++) {
        await writeStr(fileName, 'おはようございます');
        await writeStr(fileName, 'こんにちは');
        await writeStr(fileName, 'こんばんは');
    }
}
me(); */
// awaitは、asyncの関数内で使えて、promiseの結果がわかるまで処理をそこで止めるもの。ゆえに、promiseオブジェクトの結果を返す関数とかが後に続く
// rejectかresolveを待ってるわけなので、渡す関数の返り値にresolveとかrejectで終わるpromiseオブジェクトを入れときましょう。

for ( let i = 0; i <= 30; i++) {
    new Promise( resolve => {
        fs.appendFile(fileName, "おはよう\n", "utf-8", () => resolve() )
    })
    .then(new Promise( resolve => {
        fs.appendFile(fileName, "こんにちは\n", "utf-8", () => resolve() )
    }))
    .then(new Promise( resolve => {
        fs.appendFile(fileName, "こんばんは\n", "utf-8", () => resolve() )
    }))
}
    


// うまくいってないループ
/* function morning() {
    return new Promise(success => {fs.appendFile(fileName, "おはようございます\n", "utf-8", () => success())})
}
function day() {
    return new Promise(success => {fs.appendFile(fileName, "こんにちは\n", "utf-8", () => success())})
}
function evening() {
    return new Promise(success => {fs.appendFile(fileName, "こんばんは\n", "utf-8", () => success())})
}
for (let i = 0; i<=30; i++ ) {
    morning()
    .then( () => day() )
    .then( () => evening() )
} */
// 結局promiseを結果付きで返さないといけないんじゃん。thenするにもcatchするにも
