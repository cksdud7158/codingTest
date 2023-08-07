// https://www.acmicpc.net/problem/17413

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM,...playerList] = fs.readFileSync(filePath).toString().split("\n")
const [N,M]= NM.split(" ").map(Number)
playerList = playerList.map(value => value.split(" ").map(Number))
playerList.pop()

function main() {
    let possibleTime =0
    const possibleStartTimeSet = new Set()
    playerList.forEach(value => possibleStartTimeSet.add(value[0]))
    const possibleStartTimeList = [...possibleStartTimeSet]

    possibleStartTimeList.some(startTime => {
        const possiblePlayerNum = playerList.filter(timeRange => {
            return timeRange[0] <= startTime && startTime <= timeRange[1];

        }).length

        if(possiblePlayerNum>=M){
            possibleTime = startTime
            return true
        }
    })

    console.log( possibleTime===0 ? -1 : possibleTime)
}

main()
