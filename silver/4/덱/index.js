// https://www.acmicpc.net/problem/10866

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n") // 백준 사이트에 제출 시에는 input.txt 대신 dev/stdin

const [repeatNum, ...orders] = inputs

const outputList = []
const deck = []
function doOrder(order) {
    const length = deck.length
    switch (order) {
        case "pop_front":
            if (length === 0) return -1
            return deck.shift()
        case "pop_back":
            if (length === 0) return -1
            return deck.pop()
        case "size":
            return length
        case "empty":
            return length === 0 ? 1 : 0
        case "front":
            if (length === 0) return -1
            return deck[0]
        case "back":
            if (length === 0) return -1
            return deck[length - 1]
        default :
            [key, value] = order.split(" ")
            if (key === "push_front") {
                deck.unshift(value)
            } else {
                deck.push(value)
            }
    }
}

function main() {

    for (let order of orders) {
        const res = doOrder(order)
        if (res || res ===0) {
            outputList.push(res)
        }
    }

    console.log(outputList.join('\n'))
}

main()
