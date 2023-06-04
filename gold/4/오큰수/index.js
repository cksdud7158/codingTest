// https://www.acmicpc.net/problem/17298

// 참고 : https://gigibean.tistory.com/20

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, stringA] = fs.readFileSync(filePath).toString().split("\n")

const outputList = new Array(parseInt(N)).fill(-1)

const A = stringA.split(" ").map(value => Number(value))

let stack = []

function main() {


    for (let i =0; i< +N; i++){
        while (stack.length && A[stack[stack.length-1]] < A[i]){
            outputList[stack.pop()] = A[i]
        }

        stack.push(i)
    }
    console.log(outputList.join(" "))
}

main()
