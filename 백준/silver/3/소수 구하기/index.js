// https://www.acmicpc.net/problem/1978
//https://peach-milk.tistory.com/entry/%EC%86%8C%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b] = fs.readFileSync(filePath).toString().split(" ")
 a = Number(a)
b = Number(b)

function checkSosoo(num) {
    if(num === 1)return false
     for(let i=2; i*i<=num; i++){
        if(num%i ===0){
            return false
        }
    }
    return true
}

function main() {
    const numList =[]
    for(let i=a; i<b+1; i++){
        if(checkSosoo(i)){
            numList.push(i)
        }
    }

    console.log(numList.join("\n"))
}

main()
