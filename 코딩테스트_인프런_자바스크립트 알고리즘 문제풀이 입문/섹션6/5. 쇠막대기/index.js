filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let inputs = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("")

function main() {
    const stack = []

    let cnt = 0

    for(let val of inputs){
        switch (val) {
            case "(":
                stack.push(val)
                break
            case ")":
                if(stack[stack.length-1]==="("){
                    stack.pop()
                    cnt += stack.length
                }
                else{
                    cnt++
                    stack.pop()
                }
                break

        }
    }
    console.log(cnt)
}

main()


