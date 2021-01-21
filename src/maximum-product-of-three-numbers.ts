/**
 * 628. 三个数的最大乘积: https://leetcode-cn.com/problems/maximum-product-of-three-numbers/
 * 
 * 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 */
function maximumProduct(nums: number[]): number {
  const length = nums.length;
  if (length > 3) {
    nums.sort((a, b) => b - a);
  }

  return Math.max(
    nums[0] * nums[1] * nums[2],
    nums[0] * nums[length - 1] * nums[length - 2],
  );
}

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-1, -2, -3, 4]));

export {};
