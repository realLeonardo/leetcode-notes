/**
 * 714. 买卖股票的最佳时机含手续费: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 *
 * 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。
 * 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
 * 返回获得利润的最大值。
 * 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
 *
 *
 */

{
  function maxProfit(prices: number[], fee: number): number {
    // if (prices.length <= 1) {
    //   return 0;
    // }

    // const dp: number[][] = [[0, -prices[0]]];

    // for (let i = 1; i < prices.length; ++i) {
    //   dp[i] = [];
    //   dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    //   dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    // }

    // return dp[prices.length - 1][0];

    if (prices.length <= 1) {
      return 0;
    }

    let dp0 = 0,
      dp1 = -prices[0];

    for (let i = 1; i < prices.length; ++i) {
      const temp = dp0;
      dp0 = Math.max(dp0, dp1 + prices[i] - fee);
      dp1 = Math.max(dp1, temp - prices[i]);
    }

    return dp0;
  }

  console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
  console.log(maxProfit([1, 3, 7, 5, 10, 3], 3));
}

export {};
