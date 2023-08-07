const N = 4;
const M = 1;
const A = [3, 1, 2, 4];


const answer = []

function compete(participantList, M) {
    console.log("participantList::", participantList)
    if (participantList.length < 2) {
        return participantList
    }

    const winnerList = []
    for (let i = 1; i < participantList.length; i = i + 2) {
        const first = participantList[i - 1]
        const second = participantList[i]

        if (first.id === M) {
            winnerList.push(first)
            answer.push(second)
            continue
        }
        if (second.id === M) {
            winnerList.push(second)
            answer.push(first)
            continue
        }
         console.log(first.charmNum, second.charmNum)
        if (first.charmNum > second.charmNum) {
            winnerList.push(first)
        } else if (first.charmNum < second.charmNum) {
            winnerList.push(second)
        } else {
            winnerList.push(first.id > second.id ? first : second)
        }
    }


    return compete(winnerList, M)
}

function solution(N, M, A) {
    const participantList = A.map((value, index) => {
        return {
            id: index + 1,
            charmNum: value
        }
    })
    console.log(compete(participantList, M))
    console.log("answer::", answer.map(value => value.id))
}

solution(N, M, A)
