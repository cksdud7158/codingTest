// https://www.acmicpc.net/problem/17299
// 참고 https://woongsios.tistory.com/288

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split("")

stack = []
res = []

function main() {

    for (let i of inputs) {
         const reg = /\W/g
        if (!reg.test(i)) {
            res.push(i)
            continue
        }

        switch (i) {
            case "(":
                stack.push(i);
                break
            case ")":
                while (stack.length && stack[stack.length - 1] !== "(") {
                    res.push(stack.pop());
                }
                stack.pop(); // ( 지워주기
                break
            case "+":
            case "-":
                while (stack.length && stack[stack.length - 1] !== "(") {
                    res.push(stack.pop())
                }
                stack.push(i);
                break
            case "*":
            case "/":
                while (
                    (stack.length && stack[stack.length - 1] === "*") ||
                    stack[stack.length - 1] === "/"
                    ) {
                    res.push(stack.pop())
                }
                stack.push(i);
                break
        }

    }
    while (stack.length) {
        res.push(stack.pop())
    }
    console.log(res.join(""));

}

main()



