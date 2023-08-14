const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [n, ...timeRanges] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
n = Number(n)
timeRanges = timeRanges.map(val=> {
  return val.split("").map(Number)
})

timeRanges.sort((a, b) => a[0]-b[0])

function countAbleMeetingList(list) {
    const temp = []
     for(let i =0; i < list.length; i++){
        if(i !== 0 && temp[temp.length-1][1]> list[i][0] ) {
            continue
        }
        temp.push(list[i])
    }
    return temp
}

function main() {
    let ableMeetingList = []

    timeRanges.forEach((value, index, array) => {
        const list = countAbleMeetingList(array.slice(index))
        if(list.length> ableMeetingList.length){
            ableMeetingList = list
        }
    })

    console.log(ableMeetingList)
}

main()


