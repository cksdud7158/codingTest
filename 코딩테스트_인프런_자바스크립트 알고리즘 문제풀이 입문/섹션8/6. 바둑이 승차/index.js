const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [cn, ...numList] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")

numList = numList.map(Number)
let [c,n] = cn.split(" ").map(Number)

function main(c,n, numList) {
    let maxSum = 0
    function DFS(L,sum) {
        if(L===n){
            if(c > sum && maxSum<sum){
                maxSum= sum
            }

        }else{
            DFS(L+1, sum+numList[L])
            DFS(L+1, sum)
        }
    }

    DFS(0,0)

    console.log(maxSum)

}

main(c,n,numList)



