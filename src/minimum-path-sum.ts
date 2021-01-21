/**
 * 64. 最小路径和: https://leetcode-cn.com/problems/minimum-path-sum/
 *
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 *
 * 思路：
 * 动态规划
 */
function minPathSum(grid: number[][]): number {
  const dp: number[][] = [];
  // m 为行数，n 为列数
  const m = grid.length;
  const n = grid[0].length;

  // 初始化开始
  for (let i = 0; i < m; ++i) {
    dp.push([]);
  }
  dp[0][0] = grid[0][0];

  for (let i = 1; i < n; ++i) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  for (let i = 1; i < m; ++i) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  // 初始化结束

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[m - 1][n - 1];
}

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);

export {};
