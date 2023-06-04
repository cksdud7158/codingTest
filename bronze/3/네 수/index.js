// https://www.acmicpc.net/problem/2743

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = fs.readFileSync(filePath).toString().split(" ")


function main() {
    console.log(Number(inputs[0]+inputs[1])+Number(inputs[2]+inputs[3]))
}

main()

