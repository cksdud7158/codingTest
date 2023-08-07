const N = 10;
const M = 7;

const answer = []

function compete(participantList, M) {
    console.log("participantList::",participantList)
    if (participantList.length < 2) {
        return participantList
    }

    const winnerList = []
    for (let i = 1; i < participantList.length; i = i + 2) {
        const first = participantList[i - 1]
        const second = participantList[i]

        if (first === M) {
            winnerList.push(M)
            answer.push(second)
            continue
        }
        if (second === M) {
            winnerList.push(M)
            answer.push(first)
            continue
        }

        if (first > second) {
            winnerList.push(second)
        } else {
            winnerList.push(first)
        }
    }
    return compete(winnerList, M)
}

function solution(N, M) {
    const participantList = new Array(N).fill(0).map((_, index) => index + 1)
    console.log(compete(participantList, M))
    console.log("answer::",answer.sort())
}

solution(N, M)
