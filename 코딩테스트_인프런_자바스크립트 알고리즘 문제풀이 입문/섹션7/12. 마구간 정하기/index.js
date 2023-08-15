const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [nc, numList] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
let [n, c] = nc.split(" ").map(Number)
numList = numList.split(" ").map(Number)
numList.sort()

function calcNum(targetDistance) {
    console.log("-------")

    let cnt = 1
    let sumDiff =0
    for (let i = 0; i< numList.length; i++){
        if(i===0)continue

        const diff = numList[i]-numList[i-1]

        if(sumDiff+diff>= targetDistance){
            cnt++
            sumDiff =0
        }

    }

    return cnt
}

function main() {
    let lt = 1
    let rt = numList[numList.length - 1] - numList[0]
    let ans = 0
     while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2);
        const res = calcNum(mid)
         console.log(lt, rt , res)
        if (res >= c) {
            lt = mid + 1
            ans = res
        } else {
            rt = mid - 1
        }
    }

    console.log(ans)
}


main()


