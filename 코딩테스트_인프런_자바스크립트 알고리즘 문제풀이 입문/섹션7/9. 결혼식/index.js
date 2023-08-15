const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [n, ...timeRanges] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
n = Number(n)

const timeList = []
timeRanges.forEach(val=> {
  const temp =val.split(" ")
  timeList.push([Number(temp[0]), 0])
  timeList.push([Number(temp[1]), 1])
})

timeList.sort((a, b) => {
  if(a[0]===b[0]) return b[1]-a[1]
  return a[0]-b[0];
})

function main() {
  let ans =Number.MIN_SAFE_INTEGER
  let cnt = 0
  timeList.forEach(value => {
    if(value[1]===0){
      cnt++
    }else{
      cnt--
    }

    ans = Math.max(ans, cnt)
  })
  console.log(ans)
}


main()


