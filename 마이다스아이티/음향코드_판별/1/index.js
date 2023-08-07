const F = [0,1,2,3,4,5,6,7]
function solution(numList) {
    numList.sort()
    const isPermutation = numList.every((value, index) => value === index + 1)
    console.log(isPermutation ? 1: 0)
}

solution(F)
