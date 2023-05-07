// https://www.acmicpc.net/problem/1874

const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split("\n") // 백준 사이트에 제출 시에는 input.txt 대신 dev/stdin

const totalNum = inputs.shift()
inputs.pop()

const outputList = []

function main() {
    const stack = []
    let num = 1
    const flag =inputs.some(input => {
        while (num <= input) {
            stack.push(num++)
            outputList.push("+")
        }
        const popNum = stack.pop()
        if (popNum+"" !== input) {
             console.log("NO")
            return true
        }
        outputList.push("-")
        return  false
    })
    if(!flag) {
        console.log(outputList.join('\n'))
    }
}

main()


// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//
// const N = Number(input[0]);
// const stack = [];
// let message = "";
//
// let counter = 1;
// for (let i = 1; i <= N; i++) {
//     let n = Number(input[i]);
//
//     while (counter <= n) {
//         stack.push(counter++);
//         message += "+\n";
//     }
//     if (stack[stack.length - 1] === n) {
//         message += "-\n";
//         stack.pop();
//     } else {
//         message = "NO";
//         break;
//     }
// }
//
// console.log(message);
