filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let inputs = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("")
    .reverse()

function main() {
    const stack = []

    while (true) {
        if (!inputs.length) {
            break
        }
        console.log("------------")
        const val = inputs.pop()
        console.log("val::",val)

        if (isNaN(Number(val))) {
            const second = stack.pop()
            const first = stack.pop()
            let res = 0
            switch (val) {
                case "+":
                    res = first + second
                    break
                case "-":
                    res = first - second
                    break
                case "*":
                    res = first * second
                    break
                case "/":
                    res = first / second
                    break
            }
            console.log("res::",res)
            stack.push(res)
        }else{
        stack.push(Number(val))

        }
    }

    console.log(stack.pop())
}

main()


