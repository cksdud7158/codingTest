// https://www.notion.so/ryanwolf/b0434744dac14e10bbb9f6dd8d4da871?pvs=4#26857ce4f6c74939abcbfd300f3d060f

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NK, benefitList] = fs.readFileSync(filePath).toString().split("\n")
const [N,K]= NK.split(" ").map(Number)
function main() {

}

main()
