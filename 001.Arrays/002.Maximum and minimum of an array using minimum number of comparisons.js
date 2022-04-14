function minmaxOfArr(arr){
    let minmax = {}
    if(arr.length === 1){
        minmax.min = arr[0]
        minmax.max = arr[0]
        return minmax
    } 
    if(arr[0] > arr[1]){
        minmax.min = arr[1]
        minmax.max = arr[0]
    } else {
        minmax.min = arr[0]
        minmax.max = arr[1]
    }

    for(let i = 2; i<arr.length; i++){
        if(arr[i] < minmax.min) minmax.min = arr[i]
        if(arr[i] > minmax.max) minmax.max = arr[i]
    }
    return minmax
}

minmaxOfArr([1, 2, 3, 4, 5, 6, 0]) //{min: 0, max: 6}
// Time Complexity - O(n)
// Space Complexity - O(1)