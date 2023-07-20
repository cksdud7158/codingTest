filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let inputs = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("")

function main() {
    const stack = []
    const word = []

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] === "(") {
            stack.push(inputs[i])
            continue
        }
        if (inputs[i] === ")") {
            stack.pop()
            continue
        }
        if (stack.length === 0) {
            word.push(inputs[i])
        }
    }

    console.log(word.join(""))
}

main()

