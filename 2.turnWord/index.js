// https://www.acmicpc.net/problem/9093

const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split("\n") // 백준 사이트에 제출 시에는 input.txt 대신 dev/stdin

const outputList = []

for (let i = 1; i < parseInt(inputs[0]) + 1; i++) {
    const words= inputs[i].split(" ")
    const reverseWords =words.map(word=>{
        return word.split("").reverse().join("")
    }).join(" ")
    outputList.push(reverseWords)
}

console.log(outputList.join('\n'))


// const input = require("fs").readFileSync("input.txt").toString().split("\n");
//
// let result = input.slice(1);
//
// result = result.map((x) => {
//     return x.split("").reverse().join("").split(" ").reverse().join(" ");
// });
//
// console.log(result.join("\n"));
