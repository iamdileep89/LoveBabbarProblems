function validShuffle(s1, s2, s3){
    if(s1.length+s2.length !== s3.length) return false
    // sort each string to make comparison easier
    s1 = [...s1].sort().join('')
    s2 = [...s2].sort().join('')
    s3 = [...s3].sort().join('')
    console.log(s1, s2, s3)
  
    let i = 0 // track for s1
    let j = 0 // track for s2
    let k = 0 // to iterate over s3

    // iterate through all characters of result
    while(k < s3.length){
        // check if first character of result matches
      // with first character of first string
        if(i < s1.length && s1.charAt(i) === s3.charAt(k)){
            i++
            // check if first character of result matches
      // with the first character of second string
        } else if(j < s2.length && s2.charAt(j) === s3.charAt(k)){
            j++
        } else { // if the character doesn't match
            return false
        }
        // access next character of result
        k++
    }
    // after accessing all characters of result
    // if either first or second has some characters left
    if( i < s1.length || j < s2.length){
        return false
    }
    return true
}


validShuffle('XY','12','1XY2')  // true

// Time Complexity O(n)