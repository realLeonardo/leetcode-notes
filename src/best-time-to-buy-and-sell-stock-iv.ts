/**
 * 188. 买卖股票的最佳时机 IV: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
 *
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
 * 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 * [3,3,5,0,0,3,1,4] -> 6
 * [1,2,3,4,5] -> 4
 */

{
  function maxProfit(k: number, prices: number[]): number {
    if (prices.length === 0) {
      return 0;
    }

    const dp: number[][][] = [];

    for (let i = 0; i < prices.length; ++i) {
      dp[i] = [];

      for (let j = 1; j <= k; ++j) {
        dp[i][j] = [];
      }

      dp[i][0] = [0, 0];

      if (i === 0) {
        for (let j = k; j >= 1; --j) {
          dp[i][j] = [0, -prices[i]];
        }
        continue;
      }

      for (let j = 1; j <= k; ++j) {
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
        dp[i][j][1] = Math.max(
          dp[i - 1][j][1],
          dp[i - 1][j - 1][0] - prices[i],
        );
      }
    }

    return dp[prices.length - 1][k][0];
  }

  console.log(maxProfit(2, [3, 3, 5, 0, 0, 3, 1, 4]));
  console.log(maxProfit(2, [1, 2, 3, 4, 5]));
}

export {};
