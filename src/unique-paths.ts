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

/**
 * 思路: 回溯法 backtrack
 */
interface Position {
  x: number;
  y: number;
}

let resultsCount = 0;

function uniquePaths(m: number, n: number): number {
  resultsCount = 0;
  const final: Position = { x: m, y: n };
  const steps: Position[] = [{ x: 1, y: 1 }];

  backtrack(steps, final);

  return resultsCount;
}

function backtrack(steps: Position[], final: Position): void {
  const current = steps[steps.length - 1];

  // NOTE: 结束条件
  if (current.x === final.x && current.y === final.y) {
    resultsCount++;
    return;
  }

  for (let op of ["x", "y"]) {
    const current = {
      x: steps[steps.length - 1].x,
      y: steps[steps.length - 1].y,
    };

    if (op === "x") {
      current.x++;
    } else {
      current.y++;
    }

    if (current.x > final.x || current.y > final.y) {
      continue;
    }

    backtrack([...steps, current], final);
  }
}

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
// FIXME: 耗时过长
console.log(uniquePaths(23, 12));

export {};
