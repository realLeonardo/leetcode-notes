/**
 * 34. Find First and Last Position of Element in Sorted Array: https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * Follow up: Could you write an algorithm with O(log n) runtime complexity?
 *
 * 1. nums = [5,7,7,8,8,10], target = 8 -> [3, 4]
 * 2. nums = [5,7,7,8,8,10], target = 6 -> [-1, -1]
 */

/**
 * 思路：
 * 1. 先用二分查找法找到第一个等于target的index，若不存在则返回[-1, -1]
 * 2. 分别向左、向右使用找到边界值所在的index
 */
function searchRange(nums: number[], target: number): number[] {
  const elIndex = binarySearch(nums, target, 0, nums.length - 1);
  if (elIndex < 0) {
    return [-1, -1];
  }

  let leftIndex = elIndex,
    rightIndex = elIndex;

  while (nums[leftIndex] === target) {
    leftIndex--;
  }
  while (nums[rightIndex] === target) {
    rightIndex++;
  }

  return [leftIndex + 1, rightIndex - 1];
  // NOTE: 偷懒做法，利用已有的 [].indexOf(), [].lastIndexOf()
  // return [nums.indexOf(target), nums.lastIndexOf(target)];
}

/**
 * 获取数组里目标值的下标，如果不存在则返回-1
 * @param nums
 * @param target
 * @param from
 * @param to
 */
function binarySearch(
  nums: number[],
  target: number,
  from: number,
  to: number,
): number {
  if (to > nums.length - 1) {
    to = nums.length;
  }
  if (from < 0) {
    from = 0;
  }

  let mid = Math.floor((from + to) / 2);

  while (from <= to) {
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      to = mid - 1;
    } else {
      from = mid + 1;
    }
    mid = Math.floor((from + to) / 2);
  }

  return -1;
}

console.log(searchRange([1, 2, 2, 2, 5], 1));

export {};
