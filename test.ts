

// @ts-ignore
function solution(arr: []) {
    var stk:any = [];

    let i = 0

    while (true){
        if(i >= arr.length){
            break
        }

        console.log(stk)
        if(stk.length <=0){
            stk.unshift(arr[i])
            i += 1
        }else {
            if(stk[stk.length -1] < arr[i]){
                stk.push(arr[i])
                i += 1
            } else {
                stk.pop()
            }
        }
    }

    return stk;
}

let arr:any = 	[1, 4, 2, 5, 3]

const result = solution(arr)

console.log(result)
