const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let inputVal = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
inputVal = Number(inputVal)


function toBinary(num, res) {
    if (num === 0) return res

    return toBinary(parseInt(num/2), num%2+res)

}

function main() {
    console.log(toBinary(inputVal,""))
}

main()


