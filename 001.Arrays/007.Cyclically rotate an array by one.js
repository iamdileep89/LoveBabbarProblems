// Time - O(n), space - O(1)

function cyclicRotate(arr){
    let i = 0
    let j = arr.length-1
    while(i < j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
    }
    return arr;
}

function cyclicRotate1(arr){
    return [arr[arr.length-1], ...arr.slice(0,arr.length-1)]
}