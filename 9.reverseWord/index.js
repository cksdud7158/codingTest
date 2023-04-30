// https://www.acmicpc.net/problem/17413

// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString()
//
// const outputList = []
//
// const readValue = [...input.trim()]
// function reverseWord(word) {
//     return word.join("").split(" ").map(value => [...value.trim()].reverse().join("")).join(" ")
// }
//
// function sliceTag(){
//     const closeTagIndex = readValue.findIndex(value =>value=== ">")
//     outputList.push(readValue.splice(0,  closeTagIndex !==-1 ? closeTagIndex+1 : readValue.length).join(""))
//
// }
//
// function main() {
//
//     while(readValue.length!==0){
//
//         if(readValue[0]!=="<"){
//             const closeTagIndex = readValue.findIndex(value =>value=== "<")
//
//             outputList.push(reverseWord(readValue.splice(0,  closeTagIndex !==-1 ? closeTagIndex : readValue.length)))
//         }
//         else {
//             sliceTag()
//         }
//
//      }
//
//
//     console.log(outputList.join(''))
// }
//
// main()


// let input = require('fs').readFileSync('input.txt').toString().trim();
//
// console.log(input.replace(/<[a-z0-9 ]+>|[a-z0-9]+/g, (match) => {
//     console.log(match)
//     if (match.startsWith('<')) {
//         return match;
//     }
//     return [...match].reverse().join('');
// }));
