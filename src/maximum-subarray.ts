/**
 * 53. Maximum Subarray: https://leetcode-cn.com/problems/maximum-subarray/
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 * 
 * [-2,1,-3,4,-1,2,1,-5,4] -> [4,-1,2,1] -> 6
 * [1] -> 1
 * [-2,1,-3,4,-1,2,1,-5,4] -> 6
 * 
 */

/**
 * 典型的动态规划
 */
function maxSubArray(nums: number[]): number {
  let pre = 0, max = nums[0];

  for (const x of nums) {
    pre = Math.max(pre + x, x);
    max = Math.max(max, pre);
  }

  return max;
}

console.log(maxSubArray([-2]));
