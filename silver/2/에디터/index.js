// https://www.acmicpc.net/problem/1406

const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split("\n") // 백준 사이트에 제출 시에는 input.txt 대신 dev/stdin

inputs.pop()
const [initWord,totalNum,...orderList] = inputs

stackOne = [...initWord]
stackTwo = []

function doOrder(order) {
      switch (order) {
        case "L":
            if(stackOne.length===0){
                break
            }
            stackTwo.push(stackOne.pop())
            break
        case "D":
            if( stackTwo.length===0 ){
                break
            }
            stackOne.push(stackTwo.pop())
            break
        case "B":
            if(stackOne.length===0){
                break
            }
            stackOne.pop()
            break
        default :
            const inputWord = order.split(" ")[1]
            stackOne.push(inputWord)
            break
    }

    console.log(stackOne, stackTwo)
}

function main() {
    orderList.forEach(value => {
        console.log(stackOne, stackTwo,value)
         doOrder(value)
    })
    console.log(stackOne.join("")+stackTwo.reverse().join(""))
}

main()



// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split("\n");
//
// const l = input[0].split('')
// const r = []
//
// for (let i = 2; i < 2 + Number(input[1]); i++) {
//     input[i][0] == 'L' && l.length && r.push(l.pop())
//     input[i][0] == 'B' && l.length && l.pop()
//     input[i][0] == 'D' && r.length && l.push(r.pop())
//     input[i][0] == 'P' && l.push(input[i][2])
// }
// console.log([...l, ...r.reverse()].join(''))
