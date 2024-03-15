/*
Write a function, nonAdjacentSum, that takes in an array of numbers as an argument. The function should return the maximum sum of non-adjacent elements in the array. There is no limit on how many elements can be taken into the sum as long as they are not adjacent.
For example, given:

[2, 4, 5, 12, 7]

The maximum non-adjacent sum is 16, because 4 + 12. 
4 and 12 are not adjacent in the array.
*/

const nonAdjacentSum = (nums, i=0, memo={}) => {
    if(i >= nums.length) return 0

    if( i in memo) return memo[i]

    const include = nums[i] + nonAdjacentSum(nums, i+2, memo)
    const exclude = nonAdjacentSum(nums, i+1)

    memo[i] = Math.max(include, exclude)
    return memo[i]
}


const nums = [2, 4, 5, 12, 7];
console.log(nonAdjacentSum(nums)) //16