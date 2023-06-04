// https://www.acmicpc.net/problem/10430


const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [A,B,C] = fs.readFileSync(filePath).toString().split(" ").map(val => +val)


function main() {
    console.log((A+B)%C)
    console.log(((A%C) + (B%C))%C)
    console.log((A*B)%C)
    console.log(((A%C) * (B%C))%C)
}

main()


