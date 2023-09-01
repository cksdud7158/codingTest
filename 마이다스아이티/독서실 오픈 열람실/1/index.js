function isArrivedTarget(cuX, cuY, target, numList) {
    console.log("-------------------")
    console.log("cuX:::", cuX, "cuY:::", cuY, "target:::", target, "numList:::", numList)
    const filtered = numList.reduce((pv,cv) => {
        if(cv[0] === cuX-1 || cv[0] === cuX){

        }
             // return (item[0] === cuX - 1 || item[0] === cuX) && item[1] < cuY
        }
    )

    console.log("filtered::", filtered)

    if (!filtered.length) {
        return cuX === target;
    }

    if (numList[filtered][0] === cuX-1) {
        cuX--
    }else{
        cuX++
    }
    cuY = numList[filtered][1]

    return isArrivedTarget(cuX, cuY, target, numList)
}

function solution(N, M, H, S, C) {
    let answer = 0;

    const proxyS = S.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1]
        }
        return a[0] - b[0]
    })



    for (let i = 0; i < N; i++) {
        console.log("***************")
        console.log("i:::", i + 1)
        const res = isArrivedTarget(i + 1, H, C, [...proxyS])
        console.log(res)
        if (res) {
            answer = i + 1;
            break;
        }
    }

    return answer;
}

console.log(solution(4, 5, 10, [[1, 7], [3, 6], [1, 5], [2, 8], [1, 6]], 1))


