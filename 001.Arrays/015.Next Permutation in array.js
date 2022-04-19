// find the peak number
// find largest number to the right of the peak
// flip peak-1 and largest number to right of the peak
// reverse from peak to the end of arr

function nextPermutation(arr){
    let peak
    // find peak
    for(let i = arr.length; i>=0; i--){
        if(i == 0){
            peak = 0
        }
        if(arr[i] > arr[i-1]){
            peak = i
            break
        }
    }

    // find largest number to the right of the peak
    for(let j=arr.length-1; j>=0; j--){
        if(arr[j] > arr[peak-1]){
            var temp = arr[j]
            arr[j] = arr[peak-1]
            arr[peak-1] = temp
            break
        }
    }

    // reverse from peak to end of array
    let start = peak
    let end = arr.length-1
    while(start<end){
        var temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr

}

nextPermutation([1, 5, 8, 4, 7, 6, 5, 3, 1])
//[1, 5, 8, 5, 1, 3, 4, 6, 7]