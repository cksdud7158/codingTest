// https://www.acmicpc.net/problem/1158

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split(" ") // 백준 사이트에 제출 시에는 input.txt 대신 dev/stdin

const [n, k] = inputs

const outputList = []

function main() {
    const nList = Array.from(new Array(parseInt(n))).map((_, index) => index+1)

    let cnt = 1

    while(nList.length>0){
        if(cnt%k===0){
            outputList.push(nList.shift())

        }else {
         nList.push(nList.shift())

        }
        cnt++

    }



    console.log("<"+outputList.join(', ')+">")
}

main()

//
// function solution(N, K) {
//     var answer = '';
//     var circleArray = Array(N);
//     var head = 0;
//
//     for (var i = 0; i < N; i++) {
//         circleArray[i] = i + 1;
//     }
//
//     while (circleArray.length > 0) {
//         head += K - 1;
//         head %= circleArray.length;
//         if (answer) answer += ', ';
//         answer += circleArray[head];
//         circleArray.splice(head, 1);
//     }
//
//     return '<' + answer + '>';
// }
//
// var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
//
// console.log(solution(parseInt(input[0]), parseInt(input[1])));
