const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let inputVal = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
inputVal = Number(inputVal)


function getNextNum(num) {
    if (num === 0) return
    getNextNum(num - 1)
    console.log(num)
}

function main() {
    getNextNum(inputVal)
}

main()


