// https://www.acmicpc.net/problem/10820

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = fs.readFileSync(filePath).toString().split("\n")

const outputRes = []

function main() {
    for (let input of inputs) {
        const res = [0, 0, 0, 0]
        for (let char of input) {
            const lowerReg = /[a-z]/g
            const upperReg = /[A-Z]/g
            const numReg = /[0-9]/g
            const whiteSpace = /\s/g
            if (lowerReg.test(char)) {
                res[0]++
            }
            if (upperReg.test(char)) {
                res[1]++
            }
            if (numReg.test(char)) {
                res[2]++
            }
            if (whiteSpace.test(char)) {
                res[3]++
            }
        }
        outputRes.push(res.join(" "))
    }
    outputRes.pop()
    console.log(outputRes.join("\n"))
}

main()


//
// let input = require('fs').readFileSync('input.txt').toString().split('\n');
// if (input[input.length-1] === "") input.pop();
// for(let str of input){
//     let lower = str.length - str.replace(/[a-z]/g, "").length;
//     let upper = str.length - str.replace(/[A-Z]/g, "").length;
//     let number = str.length - str.replace(/[0-9]/g, "").length;
//     let blank = str.split(" ").length-1;
//     console.log( lower,upper, number,blank );
// }
