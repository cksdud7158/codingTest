// // https://www.acmicpc.net/problem/6588
//
// // https://tesseractjh.tistory.com/291
// // https://velog.io/@rkio/%EB%B0%B1%EC%A4%80-Javascript-6588
//
filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const primeNums = [];
const nums = Array(1_000_000 + 1).fill(true);
nums[0] = false;
nums[1] = false;

for (let i = 2; i <= Math.sqrt(1_000_000); i++) {
    if (!nums[i]) {
        continue;
    }
     primeNums.push(i);
    for (let j = i * 2; j <= 1_000_000; j += i) {
        nums[j] = false;
    }
}
console.log(
    input.slice(0, -1).map(num => {
        const low = primeNums.find(primeNum => nums[num - primeNum]);
        if (low) {
            const high = num - low;
            return `${num} = ${low} + ${high}`;
        }
        return "Goldbach's conjecture is wrong.";
    }).join('\n')
);


// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => Number(item));
//
// let ans = "";
//
// const max = Math.max(...input);
//
// // 주어진 input 중 가장 큰 수까지의 소수를 구해놓는다
// let isPrime = new Array(max + 1).fill(true);
//
// isPrime[0] = false;
// isPrime[1] = false;
//
// for(let i = 2; i*i < max; i++){
//     if(isPrime[i]){
//         let multiple = 2;
//
//         while(i * multiple < max){
//             isPrime[i * multiple] = false;
//             multiple++;
//         }
//     }
// }
//
// // 소수 중 홀수만 가지고 진행해야하므로 2를 제외하고 진행한다.
// // 따라서 0,1,2를 제외한 인덱스인 3부터 시작됨.
// input.map((item) => {
//     // input의 원소 값인 item까지의 범위 내에 있는 소수들만으로 판단.
//     // 인덱스가 곧 소수값이기 때문에 가능한 풀이.
//     for(let i = 3; i <= item; i++){
//         // 예를들어, item이 8이라면 3 ~ 8 사이에 있는 소수만으로 표현을 해야된다.
//         // i = 3이라면 item - i = 8 - 3 = 5가 된다.
//         // 만약, 경우의 수가 여러가지가 나올 가능성이 있더라도
//         // 가장 앞과 가장 끝 소수부터 시작해서 점점 좁혀가는 것이기 때문에, 가장 빨리 만족하는 두 수가 정답이 된다.
//         if(isPrime[i] && isPrime[item - i]){
//             ans += `${item} = ${i} + ${item - i}\n`;
//             break;
//         }
//     }
// });
//
// console.log(ans);
