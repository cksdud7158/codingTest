// https://www.notion.so/ryanwolf/b0434744dac14e10bbb9f6dd8d4da871?pvs=4#14f2884ca7284d108c26e4e8a669e696

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
