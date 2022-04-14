
// Appraoch 1 - Quick sort methodology
// time complexity - O(n)
// space complexity - O(1)
function rearrange(arr){
    let j=0
    for(let i =0; i<arr.length; i++){
        if(arr[i]<0){
            if(i!=j){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
            j++
        }
    }

   return arr
}

rearrange([ -1, 2, -3, 4, 5, 6, -7, 8, 9 ]) //[-1, -7, -3, 4, 5, 6, 2, 8, 9]



// Approach -2 --- Two pointer pattern
// time complexity - O(n)
// space complexity - O(1)
function rearrange1(arr){
    let left = 0
    let right = arr.length-1

    while(left<=right){
        if(arr[left]<0 && arr[right] < 0){
            left++
        } else if(arr[left] >0 && arr[right]<0){
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++
            right--
        } else if(arr[left] > 0 && arr[right] > 0){
            right--
        } else {
            left++
            right--
        }
    } 
    return arr
}
rearrange1([ -1, 2, -3, 4, 5, 6, -7, 8, 9 ]) //[-1, -7, -3, 4, 5, 6, 2, 8, 9]


// Approach -2 --- Dutch National Flag Algorithm
// time complexity - O(n)
// space complexity - O(1)

function rearrange2(arr){
    let low = 0
    let high = arr.length-1

    while(low <= high){
        console.log(arr)
        if(arr[low]<=0){
            low++
        } else {
            let temp = arr[low]
            arr[low] = arr[high]
            arr[high] = temp
            high--
        }
    }
    return arr;
}