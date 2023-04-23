// https://www.acmicpc.net/problem/10828

const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split("\n") // 백준 사이트에 제출 시에는 input.txt 대신 dev/stdin

//정수를 저장하는 스택 구현
const index = [];
const result = [];

function push(x) {
    index.push(x)
}

function pop() {
    if (index.length === 0) {
        return -1

    }
    return index.pop()
}

function size() {
    return index.length
}

function empty() {
    return index.length === 0 ? 1 : 0
}

function top() {
    if (index.length === 0) return -1
    return index[index.length - 1]
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
