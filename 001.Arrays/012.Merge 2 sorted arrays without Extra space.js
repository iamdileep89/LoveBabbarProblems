function merge(arr1, arr2){
    let i = 0, j =0, result = []

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length){
       result.push(arr1[i])
       i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
    }
    return result
}

merge([1,5,8,9],[2,3,6]) //[1, 2, 3, 5, 6, 8, 9]

// Time complexity - O(n+m)
// Space Complexity - O(1)