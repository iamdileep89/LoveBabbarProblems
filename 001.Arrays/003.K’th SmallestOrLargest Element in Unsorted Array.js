function kthSmallest(arr,k){
    arr = arr.sort((a,b) => a-b)
    return arr[k-1]
}

function kthLargest(arr,k){
    arr = arr.sort((a,b) => b-a)
    return arr[k-1]
}