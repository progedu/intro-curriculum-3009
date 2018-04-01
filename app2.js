"use strict"
const fs = require("fs")
const fileName = "./test.txt"

for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, "おっはー", "utf8")
  fs.appendFileSync(fileName, "なんやねん", "utf8")
  fs.appendFileSync(fileName, "こんちゃ", "utf8")
  fs.appendFileSync(fileName, "元気ですか", "utf8")
  fs.appendFileSync(fileName, "今日は晴れです", "utf8")
  fs.appendFileSync(fileName, "ほほい", "utf8")
  fs.appendFileSync(fileName, "まさかね", "utf8")
}