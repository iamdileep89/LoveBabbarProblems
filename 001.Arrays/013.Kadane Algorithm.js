// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

function maxSubArr(arr){
  let min = Number.MIN_VALUE
  let curSum = 0
  let maxSum = 0

  for(let i =0; i< arr.length; i++){
    curSum+=arr[i]
    if(maxSum < curSum) maxSum = curSum
    if(curSum < 0) curSum =0
  }
  return maxSum
}

// Input: nums = [1,3,4,2,2]
// Output: 2

// Input: nums = [3,1,3,4,2]
// Output: 3

// Time Complexity - Best case - O(n)
// Space complexity - O(1)