filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [essentials, instructionalDesigns] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")


function main() {



}

main()

