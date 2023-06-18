// https://www.acmicpc.net/problem/2609

//https://velog.io/@soyeon207/%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98GCD-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98LCM-%EA%B3%BC-%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98Euclidean-algorithm

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = fs.readFileSync(filePath).toString().split(" ")

let a = Number(inputs[0])
let b = Number(inputs[1])

function gcb(a, b) {
    if(b===0 ){
        return a
    }
    return  gcb(b, a%b)
}

function main() {
    // 최대 공약수
    const maxNum= gcb(a,b)
    const minNum = a*b/maxNum
    console.log(maxNum)
    console.log(minNum)
}

main()

