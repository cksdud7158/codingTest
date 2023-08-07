filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [SN, numList] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
let [S, N] = SN.split(" ").map(Number)
numList = numList.split(" ").map(Number)

function main() {
    const memory = new Array(S).fill(0)

    numList.forEach(val => {
        const index = memory.findIndex(value => value === val)
        if (index !== -1) {
            console.log(val, index)
            memory.splice(index, 1)
        } else {
            memory.shift()

        }
        memory.push(val)
        console.log(memory)
    })

    console.log(memory.reverse())
}

main()


