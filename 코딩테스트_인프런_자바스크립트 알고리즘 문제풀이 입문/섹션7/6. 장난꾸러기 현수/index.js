filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [N, numList] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
N = Number(N)
numList = numList.split(" ").map(Number)

function main() {
    const sortedList = [...numList].sort()
    const temp = []

    numList.forEach((val, index) => {
        if (val !== sortedList[index]) {
            temp.push(index + 1)
        }
    })

    console.log(temp)
}

main()


