filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [N,K] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number)


function solution(n,k) {
    let answer;
    let queue=Array.from({length:n}, (v, i)=>i+1);
    while(queue.length){
        for(let i=1; i<k; i++) queue.push(queue.shift());
        queue.shift();
        if(queue.length===1) answer=queue.shift();
    }
    return answer;
}
function main() {

    console.log(solution(N,K));
}

main()

