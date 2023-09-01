const N = 4;
const M = 2;


const answer = []

function calcCharmNum(id) {
    const binaryNumber = id.toString(2).split("")
    let cnt = 1
    while (true) {
        if (binaryNumber.pop() === "1") {
            break
        }
        cnt++
    }
    return cnt
}

function compete(participantList, M) {
    if (participantList.length < 2) {
        return participantList
    }

    const winnerList = []
    for (let i = 1; i < participantList.length; i = i + 2) {
        const first = participantList[i - 1]
        const second = participantList[i]

        if (first === M) {
            winnerList.push(first)
            answer.push(second)
            continue
        }
        if (second === M) {
            winnerList.push(second)
            answer.push(first)
            continue
        }

        if (calcCharmNum(first) > calcCharmNum(second)) {
            winnerList.push(first)
        } else if (calcCharmNum(first) < calcCharmNum(second)) {
            winnerList.push(second)
        } else {
            winnerList.push(first.id < second.id ? first : second)
        }

    }


    return compete(winnerList, M)
}

function solution(N, M) {
    const participantList = new Array(N).fill(0).map((_, index) => index + 1)

    compete(participantList, M)
    console.log(answer)
    // console.log("answer::", answer.map(value => value.id))
}

solution(N, M)

