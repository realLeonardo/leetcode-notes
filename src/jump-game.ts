/**
 * 55. 跳跃游戏: https://leetcode-cn.com/problems/jump-game/
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 */

function canJump(nums: number[]): boolean {
  if (nums.length <= 1) {
    return true;
  }

  let idx = 0;
  let stepCount = nums[idx];
  let end = stepCount;

  for (let i = 0; i <= end; i++) {
    end = Math.max(i + nums[i], end);

    if (end >= nums.length - 1) {
      return true;
    }
  }

  return false;
}

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));

export {};
