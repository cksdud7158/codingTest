filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let inputs = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number)

function main() {
    const negativeNums = []
    const positiveNums = []

    for(let num of inputs){
        if(num>0){
            positiveNums.push(num)
        }else{
            negativeNums.push(num)
        }
    }

    console.log([...negativeNums,...positiveNums])

 }

main()


