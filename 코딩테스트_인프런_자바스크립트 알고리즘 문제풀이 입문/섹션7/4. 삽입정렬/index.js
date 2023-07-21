filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let inputs = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number)

function main() {
    console.log(inputs)
    for (let i = 1; i < inputs.length; i++) {
        console.log("---------")
        for (let j = i; j >0; j--) {
            const first = inputs[j-1]
            const second = inputs[j]
            console.log(first, second)

            if(first> second){
                inputs[j-1]= second
                inputs[j] = first
            }
        }

     }

    console.log(inputs)

 }

main()


