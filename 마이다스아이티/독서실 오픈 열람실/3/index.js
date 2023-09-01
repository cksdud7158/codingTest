const N = 4;
const M = 1;
const A = [3, 1, 1, 4];
const E = [[1, 2, 3], [2], [4], [1, 2, 3, 4]];
const P = [4];


const answer = []

function compete(participantList, M) {
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

        if (first.preferFeatureNum > second.preferFeatureNum) {
            winnerList.push(first)
        } else if (first.preferFeatureNum < second.preferFeatureNum) {
            winnerList.push(second)
        } else {
            winnerList.push(first.id < second.id ? first : second)
        }

    }


    return compete(winnerList, M)
}

function calcPreferFeatureNum(preferFeatures, P) {
    let cnt = 0

    preferFeatures.forEach(val => {
        if (P.includes(val)) {
            cnt++
        }
    })

    return cnt
}

function solution(N, M, A, E, P) {
    const participantList = A.map((value, index) => {
        return {
            id: index + 1,
            charmNum: value,
            E: E[index],
            preferFeatureNum: calcPreferFeatureNum(E[index], P)
        }
    })

    console.log(compete(participantList, M))
    console.log(answer)
    // console.log("answer::", answer.map(value => value.id))
}

solution(N, M, A, E, P)
