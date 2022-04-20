/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
//     let start = 0
//     let end = s.length-1
    
//     while(start < end){
//         let temp = s[start]
//         s[start] = s[end]
//         s[end] = temp
//         start++
//         end--
//     }
    for (let i = 0; i < s.length / 2; i++) {
        [s[i], s[(s.length - i) - 1]] = [s[(s.length - i) - 1], s[i]] 
    }
    return s
};


//Time complexity - O(n)