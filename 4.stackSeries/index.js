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

