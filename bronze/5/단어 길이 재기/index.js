// https://www.acmicpc.net/problem/2743

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = fs.readFileSync(filePath).toString().trim()

function main() {

    console.log(inputs.length)
}

main()

