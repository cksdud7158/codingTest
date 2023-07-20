filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [board, moves] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
board = board.split("],").map(value => {
    return value.split("").map(Number).filter(val => !isNaN(val))
})
moves = moves.split("").map(Number).filter(val => val)

function main() {
    const rotateLists = []

    for (let i = 0; i < board.length; i++) {
        const temp = []
        for (let j = board.length - 1; j > -1; j--) {
            const num = board[j][i]
            if (!num) continue
            temp.push(num)
        }
        rotateLists.push(temp)
    }
    const stack = []
    let cnt = 0
    for (let i = 0; i < moves.length; i++) {

        const rotateList = rotateLists[moves[i] - 1]
        if (!rotateList.length) continue
        const popNum = rotateList.pop()
        if (popNum === stack[stack.length - 1]) {
            cnt += 2
            stack.pop()
            continue
        }
        stack.push(popNum)

    }

    console.log(cnt)
}

main()

