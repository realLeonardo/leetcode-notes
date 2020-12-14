/**
 * 121. 买卖股票的最佳时机: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
 * 注意：你不能在买入股票前卖出股票。
 * 
 * [7,1,5,3,6,4] -> 5
 * [7,6,4,3,1] -> 0
 */

{
  /**
   * 思路：当然是动态规划啦
   * 规则：只能完成一笔交易！
   */
  function maxProfit(prices: number[]): number {
    // NOTE: normal dp
    // const dp: number[][] = [];

    // for (let i = 0; i < prices.length; ++i) {
    //   dp[i] = [];
    //   if (i === 0) {
    //     dp[i][0] = 0;
    //     dp[i][1] = -prices[i];
    //     continue;
    //   }

    //   dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    //   dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    // }

    // return dp[prices.length-1][0];

    /**
     * 根据普通动态规划可看出，状态转换方程里只需要 dp[i-1][0], dp[i-1][1]
     * 所以只需两个变量保存即可
     * dp_0为某次(卖出)后的利润最大值，dp_1为某次(买入)后的利润最大值
     */
    let dp_0 = 0, dp_1 = -prices[0];

    for (let i = 1; i < prices.length; i++) {
      dp_0 = Math.max(dp_0, dp_1 + prices[i]);
      dp_1 = Math.max(dp_1, -prices[i]);
    }

    return dp_0;
  }

  console.log(maxProfit([7, 1, 5, 3, 6, 4]));
  console.log(maxProfit([7, 6, 4, 3, 1]));
}
