/**
 * 123. 买卖股票的最佳时机 III: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
 * 
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
 * 注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * [3,3,5,0,0,3,1,4] -> 6
 * [1,2,3,4,5] -> 4
 */

{
  function maxProfit(prices: number[]): number {
    const maxK = 2;
    const dp: number[][][] = [];

    for (let i = 0; i < prices.length; ++i) {
      dp[i] = [[0, 0], [], []];
      if (i === 0) {
        for (let k = maxK; k >= 1; --k) {
          dp[i][k][0] = 0;
          dp[i][k][1] = -prices[i];
        }
        continue;
      }

      for (let k = maxK; k >= 1; --k) {
        dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
        dp[i][k][1] = Math.max(
          dp[i - 1][k][1],
          dp[i - 1][k - 1][0] - prices[i],
        );
      }
    }

    return dp[prices.length - 1][maxK][0];
  }

  console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
  console.log(maxProfit([1, 2, 3, 4, 5]) === 4);
}
