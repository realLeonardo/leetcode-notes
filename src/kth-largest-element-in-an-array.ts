/**
 * 215. 数组中的第K个最大元素: https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 *
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 * 思路：
 * 快速排序（雾）
 */
function findKthLargest(nums: number[], k: number): number {
  return nums.sort((a, b) => b - a)[k - 1];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

export {};
