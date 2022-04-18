/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let i = 0, dup = {}
    while(i < nums.length){
        if((nums[i] in dup)) {
            return nums[i]
        }
        dup[nums[i]] = 1
        i++
    }
};

// Input: nums = [1,3,4,2,2]
// Output: 2

// Input: nums = [3,1,3,4,2]
// Output: 3

// Time Complexity - Best case - O(n)
// Space complexity - O(1)