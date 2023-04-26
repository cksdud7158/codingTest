// https://www.acmicpc.net/problem/1406

const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split("\n") // 백준 사이트에 제출 시에는 input.txt 대신 dev/stdin

inputs.pop()
const [totalNum,...orderList] = inputs

const outputList = []

const que =[]
function doOrder(order) {
    const queLength= que.length
      switch (order) {
          case "pop":
              if(queLength===0)return -1
              return que.splice(0,1)
          case "size":
              return queLength
          case "empty":
              if(queLength===0)return 1
              return 0
          case "front":
              if(queLength===0)return -1
              return que[0]
          case "back":
              if(queLength===0)return -1
              return que[queLength-1]
        default :
            // push
            que.push(order.split(' ')[1])
            break
    }
}

function main() {
    orderList.forEach(value => {
         const res =doOrder(value)
        console.log(que, value)
        console.log("res::",res)
        if(res ||res===0){
            outputList.push(res)
        }
    })
    console.log(outputList.join('\n'))
}

main()
