const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [nc, numList] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
let [n,c] = nc.split(" ").map(Number)
numList = numList.split(" ").map(Number)
numList.sort()
function calcNum(targetDistance) {
  let cnt = 1
  let totalDistance = 0
  numList.reduce(prv,cuv)

  return cnt
}
function main() {
  let lt = 1
  let rt = numList[numList-1]-numList[0]
  let ans = 0

  while (lt <= rt){
     const mid = parseInt((lt+rt)/2);
    const res = calcNum(mid)

    if(res>= c){
      lt = mid-1
      ans = res
    }else{
      rt = mid+1
    }


  }

  console.log(ans)
}


main()


