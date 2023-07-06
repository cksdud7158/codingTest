// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.
// ▣ 출력설명
// 최대합을 출력합니다.
// ▣ 입력예제 1
// 5
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// ▣ 출력예제 1
// 155

filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let inputs = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")

// function sumRows(rows) {
//     return rows.map(row=> row.reduce((prev,curr)=>{
//        return prev + curr
//     },0))
// }
//
// function sumCols(rows,N) {
//     return rows.map((row,index)=>{
//         let sum=0
//         for(let i=0; i<N; i++){
//             sum += rows[i][index]
//         }
//         return sum
//     })
// }
//
// function sumX(rows,N) {
//     let sumList = []
//     sumList[0] = rows.reduce((prev,curr, index)=>{
//         return prev + rows[index][index]
//     },0)
//     sumList[1] = rows.reduce((prev,curr, index)=>{
//         return prev + rows[index][N-index-1]
//     },0)
//     return sumList
// }
//
// function main() {
//     let N =Number(inputs[0])
//     let twoDNumList = inputs.splice(1, N).map(numList => numList.split(" ").map(Number))
//     const totalSumList = [...sumX(twoDNumList,N), ...sumCols(twoDNumList,N), ...sumRows(twoDNumList)]
//
//     console.log(Math.max(...totalSumList))
// }

function main() {
    let N =Number(inputs[0])
    let twoDNumList = inputs.splice(1, N).map(numList => numList.split(" ").map(Number))

    let maxNum =0

    for(let i=0; i<N; i++){
        let rowSum =0
        let colSum = 0
        for(let j=0; j<N; j++){
            rowSum += twoDNumList[i][j]
            colSum += twoDNumList[j][i]
        }
        if(rowSum> maxNum){
            maxNum = rowSum
        }
        if(colSum> maxNum){
            maxNum = colSum
        }
    }

    const xOne = twoDNumList.reduce((prev,curr, index)=>{
        return prev + twoDNumList[index][index]
    },0)
    const xTwo = twoDNumList.reduce((prev,curr, index)=>{
        return prev + twoDNumList[index][N-index-1]
    },0)

    if(xOne> maxNum){
        maxNum = xOne
    }

    if(xTwo> maxNum){
        maxNum = xTwo
    }

    console.log(maxNum)

}

main()

