const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let inputVal = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
inputVal = Number(inputVal)

const list = new Array(7).fill(0).map((item, idx) => idx + 1)

function search(n) {

    if (n > list.length) return
        console.log(list[n-1])
        search(2*n)
        search(2*n + 1)
}

function main() {
    search(1)
}

main()


