// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
// ▣ 입력예제 1
// teachermode e
// ▣ 출력예제 1
// 1 0 1 2 1 0 1 2 2 1 0

filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [s, t] = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")

function findAllIndex(char, list) {
    return list.map((value, index) => {
        return value ===char ? index : undefined
    }).filter(val => val)
}

function main() {
    const sList = s.split("")
    const charIndexList =findAllIndex(t,sList )
    const res =sList.map((value, index) => {
        if(value===t) return 0
        return Math.min(...charIndexList.map((num) =>{
            return Math.abs(index-num)
        }))

    })

    console.log(res)

}

main()
