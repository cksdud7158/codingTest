const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [N, numList] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")

numList = numList.split(" ").map(Number)
N= Number(N)

let ch = Array.from({length:N}, ()=>0)
const totalNum = numList.reduce((previousValue, currentValue) => previousValue+currentValue,0)

function DFS(L, sum) {
     if(L=== N){
         if(sum === totalNum/2){
            console.log(ch)
        }
    }
    else {
        ch[L]= 1
        DFS(L+1, sum+numList[L])
        ch[L]= 0
        DFS(L+1, sum)
    }
}
function main() {
    DFS(0,0)
}

main()

