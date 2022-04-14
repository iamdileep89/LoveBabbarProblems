// Approach 1 - Time Complexity o(n), space complexity - O(n)
function sort012(arr){
    let start = 0
    let mid = 0
    let end = arr.length-1
    let temp = 0

    while(mid <= end){
        if(arr[mid] == 0){
            temp = arr[mid]
            arr[mid] = arr[start]
            arr[start] = temp
            start++
            mid++
        } else if(arr[mid] == 1){
            mid++
        } else {
            temp = arr[mid]
            arr[mid] = arr[end]
            arr[end] = temp
            end--
        }
    }
    return arr
}

// Approach 2- Time Complexity o(n), space complexity - O(n)
function sort012(arr){
    let c0 =0, c1=0, c2=0
    let i = 0
    while(i<arr.length){
        if(arr[i] == 0) c0++
        if(arr[i] == 1) c1++
        if(arr[i] == 2) c2++
        i++
    }
    // Update the array
    i = 0;
 
    // Store all the 0s in the beginning
    while (c0 > 0) {
        arr[i++] = 0;
        c0--;
    }
 
    // Then all the 1s
    while (c1 > 0) {
        arr[i++] = 1;
        c1--;
    }
 
    // Finally all the 2s
    while (c2 > 0) {
        arr[i++] = 2;
        c2--;
    }
    return arr
}

sort0122([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ]) 
//[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 1]