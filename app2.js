"use strict"
const fs = require("fs")
const fileName = "./test.txt"

fs.unlinkSync("./test.txt")
for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, "おっはー\n", "utf8")
  fs.appendFileSync(fileName, "なんやねん\n", "utf8")
  fs.appendFileSync(fileName, "こんちゃ\n", "utf8")
  fs.appendFileSync(fileName, "元気ですか\n", "utf8")
  fs.appendFileSync(fileName, "今日は晴れです\n", "utf8")
  fs.appendFileSync(fileName, "ほほい\n", "utf8")
  fs.appendFileSync(fileName, "まさかね\n", "utf8")
}