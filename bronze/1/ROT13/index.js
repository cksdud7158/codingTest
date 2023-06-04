// https://www.acmicpc.net/problem/11655

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = fs.readFileSync(filePath).toString().split("")


function main() {
    const res=inputs.map(char=>{
        const ascNum = char.charCodeAt()
        if(ascNum >64 && ascNum <91){

            let rotNum = ascNum+13
             if(rotNum> 90) rotNum =rotNum-26

            return String.fromCharCode(rotNum)
        }
        if(ascNum >96&& ascNum <123){
            let rotNum = ascNum+13
             if(rotNum> 122) rotNum =rotNum-26
            return String.fromCharCode(rotNum)
        }
         return char

    })

    console.log(res.join(""))
}

main()


// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');
//
// let words = input[0]
// let answer = ''
//
// for(let i = 0; i < words.length; i++){
//     if('A' <= words[i] && words[i] <= 'Z'){
//         nums = String(words).charCodeAt(i) +13
//         if(nums> 90){
//             nums -= 26
//         }
//         answer += String.fromCharCode(nums)
//     } else if( 'a' <= words[i] && words[i] <= 'z' ){
//         nums = String(words).charCodeAt(i) + 13
//         if(nums > 122){
//             nums -= 26
//         }
//         answer += String.fromCharCode(nums)
//     } else {
//         answer += words[i]
//     }
// }
// console.log(answer)
