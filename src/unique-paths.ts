/**
 * 62. 不同路径: https://leetcode-cn.com/problems/unique-paths/
 *
 * 一个机器人位于一个 m x n 网格的左上角。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角。
 * 问总共有多少条不同的路径？
 *
 * m=3, n=7 -> 28
 * m=3, n=2 -> 3
 */
function uniquePaths(m: number, n: number): number {
  // 动态规划
  const deps: number[][] = [];
  for (let i = 0; i < m + 1; ++i) {
    deps.push([0]);
  }

  deps[1][1] = 1;
  for (let i = 2; i <= m; ++i) {
    deps[i][1] = 1;
  }
  for (let j = 2; j <= n; ++j) {
    deps[1][j] = 1;
  }

  for (let i = 2; i <= m; ++i) {
    for (let j = 2; j <= n; ++j) {
      deps[i][j] = deps[i - 1][j] + deps[i][j - 1];
    }
  }

  return deps[m][n];
  // 组合数学
  // let result = 1;
  // for (let i = n; i <= m + n - 2; ++i) {
  //   result *= i;
  // }
  // for (let i = 1; i <= m - 1; ++i) {
  //   result /= i;
  // }

  // return result;
}

console.log(uniquePaths(1, 1));
console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(3, 3));
// FIXME: 耗时过长
console.log(uniquePaths(23, 12));

export {};
