const N = 4;
const M = 1;
const K = 4;
const A = [3, 1, 3, 3];
const E = [[1, 2, 3], [2], [1, 2, 4], [1, 3, 4]];
const S = [3, 1, 2, 3];


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

        if (first.preferFeatureSum > second.preferFeatureSum) {
            winnerList.push(first)
        } else if (first.preferFeatureSum < second.preferFeatureSum) {
            winnerList.push(second)
        } else {
            winnerList.push(first.id < second.id ? first : second)
        }

    }


    return compete(winnerList, M)
}

function calcPreferFeatureSum(preferFeatures, S) {
    let cnt = 0

    preferFeatures.forEach(val => {
      cnt = cnt + S[val-1]
    })

    return cnt
}

function solution(N, M, K, A, E, S) {
    const participantList = A.map((value, index) => {
        return {
            id: index + 1,
            charmNum: value,
            E: E[index],
            preferFeatureSum: calcPreferFeatureSum(E[index], S)
        }
    })

    console.log(compete(participantList, M))
    console.log(answer)
    // console.log("answer::", answer.map(value => value.id))
}

solution(N, M, K, A, E, S)
