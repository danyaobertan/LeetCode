/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
Example 1:
Input: [2,2,1]
Output: 1
Example 2:
Input: [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Math approach
var singleNumber = function (nums) {
    let result = 0;
    let number = []
    for (let i = 0; i < nums.length; i++) {
        if (!number.includes(nums[i])) {
            number.push(nums[i])
            result += nums[i] * 2
        }
        result -= nums[i]

    }
    return result
};

// Bit manipulation approach
var singleNumberBit = function (nums) {
    let result = 0;
    for (let value of nums) {
        result ^= value;
    }
    return result
}

console.log(singleNumber([3, 3, 4, 1, 2, 1, 2]))
console.log(singleNumberBit([3, 3, 4, 1, 2, 1, 2]))

