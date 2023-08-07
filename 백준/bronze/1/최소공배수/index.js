// https://www.acmicpc.net/problem/1934

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = fs.readFileSync(filePath).toString().split("\n")

function gcb(a, b) {
    if(b===0 ){
        return a
    }
    return  gcb(b, a%b)
}

function main() {
    inputs.shift()
    inputs.pop()


    console.log(inputs.map(val=>{
        const [a,b]=val.split(" ")
        return Number(a)*Number(b)/gcb(Number(a),Number(b))
    }).join("\n"))


}

main()

