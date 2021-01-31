/**
 * 167. 两数之和 II - 输入有序数组: https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 */
function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; ++i) {
    for (let j = i + 1; j < numbers.length; ++j) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }

  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9));

export {};
