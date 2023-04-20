const fs = require('fs');
const inputs = fs.readFileSync('example.txt').toString().split("\n") // 백준 사이트에 제출 시에는 example.txt 대신 dev/stdin

//정수를 저장하는 스택 구현
const stack = [];
const result = [];

function push(x) {
    stack.push(x)
}

function pop() {
    if (stack.length === 0) {
        return -1

    }
    return stack.pop()
}

function size() {
    return stack.length
}

function empty() {
    return stack.length === 0 ? 1 : 0
}

function top() {
    if (stack.length === 0) return -1
    return stack[stack.length - 1]
}

for (let i = 1; i < parseInt(inputs[0]) + 1; i++) {
    const order = inputs[i].split(" ")
    switch (order[0]) {
        case "pop":
             result.push(pop())
            break
        case "size":
             result.push(size())
            break
        case "empty":
             result.push(empty())
            break
        case "top":
             result.push(top())
            break
        default :
            push(order[1])
    }
}


console.log(result.join('\n'));
