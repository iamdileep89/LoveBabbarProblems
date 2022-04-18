function minJumps(arr){
    let jumps = 0
    let i = 0
    while(i<arr.length){
        
        if(arr[i] > arr.length-i){
            break
        }
        i = arr[i]
        jumps++
    }
    return jumps > 0 ? jumps : -1
}

minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]) //3
//First jump from 1st element to 2nd 
// element with value 3. Now, from here 
// we jump to 5th element with value 9, 
// and from here we will jump to last. 