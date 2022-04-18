//Kadane's Algorithm:

function maxSubArrSum(arr){
    let maxSum = Number.MIN_VALUE
    let curSum = 0

    for(let i =0; i<arr.length; i++){
        curSum = curSum+arr[i]
        if(maxSum < curSum){
            maxSum = curSum
        }
        if(curSum < 0){
            curSum = 0
        }
    }
    return maxSum
}