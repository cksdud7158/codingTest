const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let inputVal = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
inputVal = Number(inputVal)
let ch = Array.from({length:inputVal+1}, ()=>0)

function DFS(n) {
    if(n===inputVal+1){
        console.log(ch.map((value, index) => value?index:0).filter(value => value).join(" "))
    }else {
        ch[n]=1
        DFS(n+1)
        ch[n]=0
        DFS(n+1)
    }
}

function main(L) {
    DFS(1)
}

main(inputVal)


