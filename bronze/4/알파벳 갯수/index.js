// https://www.acmicpc.net/problem/10808

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split("")

res = new Array(26).fill(0)

function main() {


 inputs.forEach(i=>{
     res[i.charCodeAt()-97] ++
 })

    console.log(res.join(" "));

}

main()



