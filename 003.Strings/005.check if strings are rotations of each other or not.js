// eg given s1 = ABCD and s2 = CDAB, return true, 
//given s1 = ABCD, and s2 = ACBD , return false

function areRotations(str1, str2){
    // There lengths must be same and str2 must be
        // a substring of str1 concatenated with str1.
        return (str1.length === str2.length) && ((str1+str1).indexOf(str2) !== -1)
}

areRotations("bank", "nkba")
// true

