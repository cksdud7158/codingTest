// https://www.acmicpc.net/problem/10809

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split("")

res = new Array(26).fill(-1)

function main() {


 inputs.forEach((i,index)=>{
     const resIndex =i.charCodeAt()-97
     if(res[resIndex]!==-1)return
     res[resIndex] = index
 })

    console.log(res.join(" "));

}

main()



