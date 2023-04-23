// https://www.acmicpc.net/problem/9012

const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split("\n") // 백준 사이트에 제출 시에는 input.txt 대신 dev/stdin

const outputList = []


for (let i = 1; i < parseInt(inputs[0]) + 1; i++) {
    let result = false
    let parenthesis = inputs[i]
    while (true) {
        if (parenthesis.length == 0) {
            result = true
            break
        }
        if (parenthesis.indexOf("()") == -1) {
            break
        }
        parenthesis= parenthesis.replaceAll("()", "")
    }

    if (!result) {
        outputList.push("NO")
        continue
    }
    outputList.push("YES")
}

console.log(outputList.join('\n'))

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');
// var size = parseInt(input.shift());
//
// function validBracket(arr) {
//     var st = [];
//     var flag = true;
//     for(var i = 0; i < arr.length; i++) {
//         var cur = arr[i];
//         if(cur === ")") {
//             if (!st.length || st.pop() === ")") {
//                 flag = false;
//             }
//         } else {
//             st.push(cur);
//         }
//     };
//     if(!st.length && flag) {
//         console.log("YES");
//     } else {
//         console.log("NO");
//     }
// }
//
// for(var i = 0; i < size; i++) {
//     validBracket(input[i].split(''));
// }
