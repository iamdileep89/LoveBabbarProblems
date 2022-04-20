function isPalindrome(s){
    let start = 0
    let end = s.length-1

    while(start<end){
        if(s.charAt(start) !== s.charAt(end)) return false
        start++
        end--
    }
    return true
}


// Input: S = "abba"
// Output: 1
// Explanation: S is a palindrome


// Input: S = "abc" 
// Output: 0
// Explanation: S is not a palindrome
