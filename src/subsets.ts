/**
 * 78. 子集: https://leetcode-cn.com/problems/subsets/
 *
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 */
function subsets(nums: number[]): number[][] {
  const result: number[][] = [[]];

  for (let n of nums) {
    const length = result.length;

    for (let i = 0; i < length; ++i) {
      result.push(result[i].concat(n));
    }
  }

  return result;
}

console.log(subsets([1, 2, 3]));

export {};
