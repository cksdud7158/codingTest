// https://www.acmicpc.net/problem/1978

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, numList] = fs.readFileSync(filePath).toString().split("\n")

function checkSosoo(num) {
     for(let i=2; i<num; i++){
        if(num%i ===0){
            return false
        }
    }
    return true
}

function main() {
    let num = 0
    numList.split(" ").forEach(val => {
        if(Number(val) !==1&& checkSosoo(Number(val))){
            num++
        }
    })
    console.log(num)
}

main()
