// https://www.acmicpc.net/problem/17299

const fs = require('fs');
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, A]= fs.readFileSync(filePath).toString().trim().split("\n")

const Fa ={}
A = A.split(" ").map(val=> {
    const num =Number(val)
    const Fai= Fa[num]
    if(Fai){
        Fa[num] = Fai+1
    }else{
        Fa[num] = 1
    }
    return  num
})

outputList = new Array(Number(N)).fill(-1)
stack =[]

function main() {
    for(let i =0; i<N; i++){
        while(stack.length && Fa[A[i]]> Fa[A[stack[stack.length-1]]]){
            outputList[stack.pop()]=A[i]
        }
        stack.push(i)
    }

    console.log(outputList.join(" "))
}

main()


//
// let fs = require('fs');
// filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let input = fs.readFileSync(filePath).toString().split('\n');
//
// let size = +input[0];
// let num = input[1].split(' ').map(v => Number(v));
//
// let answer = Array(size).fill(-1);
// let find = Array(1000001).fill(0);
// let stack = [];
//
//
// for(let i =0; i < size; i++){
//     find[num[i]] += 1;
// }
//
// for(let i =0; i < size; i++){
//     while(stack.length && find[num[stack[stack.length-1]]] < find[num[i]]){
//         answer[stack.pop()] = num[i];
//     }
//     stack.push(i);
// }
//
// console.log(answer.join(' '));
