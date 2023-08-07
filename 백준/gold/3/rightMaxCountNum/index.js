// https://www.acmicpc.net/problem/17299


const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, stringA] = fs.readFileSync(filePath).toString().split("\n")
const outputList = new Array(Number(N)).fill(-1)

const FList={}

const A = stringA.split(" ").map(value => {
    const num = Number(value)
     FList[num] = (FList[num]??0) + 1

    return Number(value)
})

console.log("FList",FList)
const stack = []

function main() {
    for (let i = 0; i < N; i++
    ) {

        const Ai = A[i]
        while (stack.length && FList[stack[stack.length-1]] < FList[Ai] ){
            outputList[stack.pop]= Ai
        }

            stack.push(i)

    }
    console.log(outputList)
    // console.log(outputList.join(" "))
}

main()
