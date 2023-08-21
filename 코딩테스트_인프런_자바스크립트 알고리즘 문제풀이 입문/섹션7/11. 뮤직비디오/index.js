const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [nm, numList] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
let [n,m] = nm.split(" ").map(Number)
numList = numList.split(" ").map(Number)

function calcNum(capa) {
  let cnt = 1
  let total =0
  numList.forEach(val =>{
    if(total+val> capa){
      cnt++
      total =val
    }else{
      total += val

    }
  })

  return cnt
}
function main() {
  let lt = Math.max(...numList)
  let rt = numList.reduce((pv,cv)=> pv+cv,0)
  let ans = 0

  while (lt <= rt){
    const mid = parseInt((lt+rt)/2);
    const res = calcNum(mid)


    if(res <= m){
      ans = mid
      rt = mid-1
    }else{
      lt = mid+1
    }

  }

  console.log(ans)
}


main()
