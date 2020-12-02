/**
 * 198. 打家劫舍: https://leetcode-cn.com/problems/house-robber/
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金。
 * 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * 
 * [1,2,3,1] -> [1,3] -> 4
 * [2,7,9,3,1] -> [2,9,1] -> 12 
 * [1,3,1,3,100] -> 103
 * 
 * 相似题：
 * 面试题 17.16. 按摩师: https://leetcode-cn.com/problems/the-masseuse-lcci/
 */

/**
 * 思路：动态规划
 */
function rob(nums: number[]): number {
  const length: number = nums.length;

  if (length === 0) {
    return 0;
  } else if (length === 1) {
    return nums[0];
  }

  const dp: number[] = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  let result = dp[1];

  for (let i = 2; i < length; ++i) {
    dp[i] = maxItem(dp, 0, i - 2) + nums[i];

    if (dp[i] > result) {
      result = dp[i];
    }
  }

  return result;
}

/**
 * 找到数组某个给定范围内的最大值
 */
function maxItem(arr: number[], from: number, to: number): number {
  let result = arr[from];

  for (; from <= to; ++from) {
    if (arr[from] > result) {
      result = arr[from];
    }
  }

  return result;
}

console.log(rob([2, 7, 9, 3, 1]));
