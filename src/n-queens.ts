/**
 * 51. N 皇后: https://leetcode-cn.com/problems/n-queens/
 * 
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 4 -> 2
 */

/**
 * 思路：回溯法
 */
{
  const result: string[][] = [];

  function solveNQueens(n: number): string[][] {
    // NOTE: 初始化棋盘
    let strTemp: string = "";
    for (let i = 0; i < n; ++i) {
      strTemp += ".";
    }
    let board: string[] = [];
    for (let i = 0; i < n; ++i) {
      board.push(strTemp);
    }

    backTruck(board, 0);
    return result;
  }

  function backTruck(board: string[], row: number): void {
    // NOTE: 防止浅拷贝
    board = JSON.parse(JSON.stringify(board));

    if (row === board.length) {
      result.push(board);
      return;
    }

    for (let col = 0; col < board[row].length; ++col) {
      if (!isValid(board, row, col)) {
        continue;
      }

      // NOTE: 做出选择
      const arr = board[row].split("");
      arr[col] = "Q";
      board[row] = arr.join("");

      backTruck(board, row + 1);

      // NOTE: 撤销选择
      arr[col] = ".";
      board[row] = arr.join("");
    }
  }

  function isValid(board: string[], row: number, col: number): boolean {
    const size = board.length;

    // NOTE: 对列的判断
    for (let i = 0; i < size; ++i) {
      if (board[i][col] === "Q") {
        return false;
      }
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    for (let i = row + 1, j = col + 1; i < size && j < size; ++i, ++j) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < size; --i, ++j) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    for (let i = row + 1, j = col - 1; i < size && j >= 0; ++i, --j) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    return true;
  }

  console.log(solveNQueens(4));
}
