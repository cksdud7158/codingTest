// // N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
// // ▣ 입력설명
// // 첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력 된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다.
// // 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
// // ▣ 출력설명
// // 입력된 순서대로 등수를 출력한다.
// // ▣ 입력예제 1
// // 5
// // 87 89 92 100 76
// // ▣ 출력예제 1
// // 43215
//
// filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
//
// let [N, numList] = require("fs")
//     .readFileSync(filePath)
//     .toString()
//     .trim()
//     .split("\n")
//
// numList = numList.split(" ").map(Number)
//
// function findAllIndex(num) {
//     return numList
//         .map((value, index) => value === num ? index : undefined)
//         .filter(value => typeof value === "number")
// }
//
// function main() {
//     const sortedList = [...new Set(numList)].sort((a, b) => b - a)
//     const res = []
//     let cnt = 1
//     for (let num of sortedList){
//         const allIndex = findAllIndex(num)
//         allIndex.forEach(val => {
//             res[val] = cnt
//         })
//         cnt += allIndex.length
//     }
//
//     console.log(res)
// }
//
// main()

// 민영
const [num, ...input] = require("fs")
    .readFileSync("input.txt")
    .toString()
    .trim()
    .split("\n");

function solution(num, input) {
    const n = parseInt(num);
    const answer = [];
    const scores = input.split(" ").map(Number);

    scores.sort((a, b) => {
        if (a > b) return -1;
        if (a === b) return 0;
        if (a < b) return 1;
    });

    let dict = {};
    for (let i = 0; i < n; i++) {
        if (!dict[scores[i]]) dict[scores[i]] = i + 1;
    }

    const origin = input.split(" ").map(Number);

    for (let i = 0; i < n; i++) {
        answer.push(dict[origin[i]]);
    }

    console.log(answer.join(" "));
}

solution(num, ...input);
