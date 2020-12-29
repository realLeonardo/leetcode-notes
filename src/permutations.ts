/**
 * 46. 全排列: https://leetcode-cn.com/problems/permutations/
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 *
 * [1,2,3] -> [[1,2,3], [1,3,2], ...]
 */

/**
 * 思路：回溯法
 */
// NOTE: 全局遍历存储结果

const result: number[][] = [];

function permute(nums: number[]): number[][] {
  backTruck(nums, []);
  return result;
}

function backTruck(nums: number[], track: number[]): void {
  if (nums.length === track.length) {
    result.push(track);
    return;
  }

  for (const i of nums) {
    if (track.includes(i)) {
      continue;
    }

    backTruck(nums, track.concat([i]));
  }
}

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));

export {};
