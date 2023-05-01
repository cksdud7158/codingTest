// https://www.acmicpc.net/problem/10799

// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let input = fs.readFileSync(filePath).toString().trim()
//
// let res = 0
//
// function main() {
//     input = input
//         .replaceAll("()", 1)
//     while (true) {
//         if(!input.includes("(")){
//             break
//         }
//         const reg = /\(\d+\)/g
//         input =input
//             .replaceAll(reg, (match) => {
//                 const charList = match.slice(1,match.length-1)
//                 res += charList.length + 1
//                 return charList
//             })
//     }
//     console.log(res)
// }
//
// main()


let ipt = require('fs').readFileSync(filePath).toString().trim();

let stick = 0;
let ans = 0;
for (let i = 0; i < ipt.length; i++) {
    if (ipt[i] == '(') {
        stick++;
    } else {
        stick--;
        ans+=ipt[i-1] == ')'?1:stick;

    }
    console.log("i::",i,ipt[i],"stick::",stick,"ans::",ans)
}
console.log(ans);
