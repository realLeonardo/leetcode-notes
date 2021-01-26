/**
 * 200. 岛屿数量: https://leetcode-cn.com/problems/number-of-islands/
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 *
 * 思路：
 * 深度优先遍历
 * 以一个为1的节点开始，将他周围为1的全部遍历一遍，并赋值为0
 */
function numIslands(grid: string[][]): number {
  let count = 0;

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }

  return count;
}

function dfs(grid: string[][], r: number, c: number) {
  grid[r][c] = "0";

  if (r > 0 && grid[r - 1][c] === "1") {
    dfs(grid, r - 1, c);
  }
  if (r < grid.length - 1 && grid[r + 1][c] === "1") {
    dfs(grid, r + 1, c);
  }
  if (c > 0 && grid[r][c - 1] === "1") {
    dfs(grid, r, c - 1);
  }
  if (c < grid[r].length - 1 && grid[r][c + 1] === "1") {
    dfs(grid, r, c + 1);
  }
}

console.log(
  numIslands([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"],
  ])
);
console.log(numIslands([["1"]]));
console.log(
  numIslands([
    ["1", "0", "1", "1", "1"],
    ["1", "0", "1", "0", "1"],
    ["1", "1", "1", "0", "1"],
  ])
);

export {};
