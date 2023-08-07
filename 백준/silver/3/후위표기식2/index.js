// https://www.acmicpc.net/problem/1935

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, backwardNotation, ...num]= fs.readFileSync(filePath).toString().trim().split("\n")

numList = num.map(num=>+num)

backwardNotation =backwardNotation.split("")

stack =[]
function main() {

    let cnt =0
    for(let char of backwardNotation){
        const reg = /([A-Z])+/g
        if(reg.test(char)){
            stack.push(numList[char.charCodeAt()-65])

        }else{
            const second = stack.pop()
            const first = stack.pop()

             switch (char) {
                case "+":
                    stack.push(first +second)
                    break
                case "-":
                    stack.push(first -second)
                    break
                case "*":
                    stack.push(first *second)
                    break
                case "/":
                    stack.push(first /second)
                    break
            }
        }
        console.log(stack)
     }

    console.log(stack[0].toFixed(2))
}

main()

//

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').filter(function(e, i) { return (i === 0 ? false : e); }).reverse();
// const expr = input.pop();
// const variable = input.reverse().map(function(e) { return parseInt(e); });
// const 스택 = [];
// expr.split('').forEach(function(e) {
//     switch(e) {
//         case '+':
//         case '-':
//         case '*':
//         case '/':
//             const a = 스택.pop(), b = 스택.pop();
//             스택.push(eval(b + e + a));
//             break;
//         default:
//             스택.push(parseInt(variable[e.charCodeAt() - 65]));
//     }
// });
// console.log(스택[0].toFixed(2));
