// Time Complexity O(n)
function reverseIterative(arr){
  if(!arr.length) return arr
  let start = 0, end = arr.length-1, temp
  while(start<end){
    temp = arr[end]
    arr[end] = arr[start]
    arr[start] = temp
    start++
    end--
  }
  return arr;
} 

// Time Complexity O(n)
function reverseRecursive(arr){
  if(!arr.length) return arr
  return [...reverseRecursive(arr.slice(1)), arr[0]]
}

reverseIterative([1, 2, 3, 4, 5, 6]) // [6, 5, 4, 3, 2, 1]
reverseRecursive([1, 2, 3, 4, 5, 6]) // [6, 5, 4, 3, 2, 1]