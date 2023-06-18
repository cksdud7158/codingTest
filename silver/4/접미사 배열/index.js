// https://www.acmicpc.net/problem/2743

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split("")


function main() {
    let res = []

    while (true) {
        if (!inputs.length) {
            break
        }
        res.push(inputs.join(""))
        inputs.shift()
    }
   res= res.sort()
    console.log(res.join("\n"))
}

main()

