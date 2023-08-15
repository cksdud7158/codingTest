const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [nm, numList] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
let [n,m] = nm.split(" ").map(Number)
numList = numList.split(" ").map(Number)
numList.sort()
function main() {
  let startIndex = 0
  let midIndex = Math.round(numList.length/2)
  let endIndex = numList.length-1

  let ans = -1

  while (true){
    console.log(startIndex, midIndex, endIndex)
    console.log(numList[startIndex],numList[midIndex],numList[endIndex])
    if(numList[startIndex]===m) {
      ans = startIndex
      break
    }
    if(numList[midIndex]===m) {
      ans = midIndex
      break
    }
    if(numList[endIndex]===m) {
      ans = endIndex
      break
    }

    if(numList[startIndex]<m && m < numList[midIndex]){
      endIndex = midIndex
      midIndex = Math.round(midIndex/2)
    }else {
      startIndex = midIndex
      midIndex = midIndex+ Math.round((endIndex-midIndex)/2)
    }
  }

  console.log(ans+1)

}


main()


