const N = 10;
const F = [5,7,1,3,8,9,10,4,2,1]
const B = [1,3,5,7,2,4,6,8]
function checkIsSame(numlist,B) {
     return numlist.every((value, index) => value === B[index])
}
function solution(N,F,B) {

     let cnt = 0

    for(let i =0; i<N; i++){
        cnt++
        const isSame = checkIsSame(F.slice(i,8+i),B)
        if(isSame){
            break
        }
    }

    console.log(cnt===N ? -1 : cnt)
}

solution(N,F,B)
