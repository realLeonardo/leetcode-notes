/**
 * 1584. 连接所有点的最小费用: https://leetcode-cn.com/problems/min-cost-to-connect-all-points/
 * 
 * 给你一个points 数组，表示 2D 平面上的一些点，其中 points[i] = [xi, yi] 。
 * 连接点 [xi, yi] 和点 [xj, yj] 的费用为它们之间的曼哈顿距离 ：|xi - xj| + |yi - yj| ，其中 |val| 表示 val 的绝对值。
 * 请你返回将所有点连接的最小总费用。只有任意两点之间 有且仅有一条简单路径时，才认为所有点都已连接。
 */
function minCostConnectPoints(points: number[][]): number {
  const result = [points[0]];
  let cost = 0;

  while (points.length > 0) {
    let currentDis = calcDistence(result[0], points[0]);
    let currenIdx = 0;

    for (let i = 0; i < points.length; ++i) {
      for (let j = 0; j < result.length; ++j) {
        const temp = calcDistence(points[i], result[j]);

        if (temp < currentDis) {
          currenIdx = i;
          currentDis = temp;
        }
      }
    }

    cost += currentDis;
    result.push(points.splice(currenIdx, 1)[0]);
  }

  return cost;
}

/**
 * 求两点直接的曼哈顿距离
 */
function calcDistence(p1: number[], p2: number[]): number {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]));

export {};
