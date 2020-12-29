/**
 * 322. Coin Change: https://leetcode-cn.com/problems/coin-change/
 *
 * You are given coins of different denominations and a total amount of money amount.
 * Write a function to compute the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 *
 * [1,2,5] 11 -> 3
 * [2] 3 -> -1
 * [1] 2 -> 2
 */

/**
 * 经典的动态规划问题
 *
 * f(i) = min(f(i), f(i-c)+1);
 */
function coinChange(coins: number[], amount: number): number {
  const dp: number[] = [];

  dp[0] = 0;

  for (let i = 1; i <= amount; ++i) {
    for (const c of coins) {
      if (i - c < 0 || dp[i - c] === -1) {
        continue;
      }

      if (dp[i] === undefined) {
        dp[i] = 1 + dp[i - c];
      } else {
        dp[i] = Math.min(dp[i], 1 + dp[i - c]);
      }
    }

    if (dp[i] === undefined) {
      dp[i] = -1;
    }
  }

  return dp[amount];
}

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 2));

export {};
