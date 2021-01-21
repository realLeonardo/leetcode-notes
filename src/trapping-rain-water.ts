/**
 * 42. 接雨水: https://leetcode-cn.com/problems/trapping-rain-water/
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 * [0,1,0,2,1,0,1,3,2,1,2,1] -> 6
 * [4,2,0,3,2,5] -> 9
 *
 * 1. 先找出凹区间
 * 2. 计算每个凹区间的度
 */
function trap(height: number[]): number {
  const hLength = height.length;

  const holes: number[][] = [];
  for (let i = 0; i < hLength - 1; ++i) {
    // 找到第一个下坡
    while (i + 1 < hLength && height[i] <= height[i + 1]) ++i;
    const beginIdx = i;
    let j = beginIdx;
    // 找到转折点
    while (j + 1 < hLength && height[j] >= height[j + 1]) ++j;
    let endIdx = j;
    while (endIdx + 1 < hLength && height[endIdx] <= height[endIdx + 1]) {
      ++endIdx;
    }
    if (endIdx !== j) {
      holes.push([beginIdx, endIdx]);
    }
    i = endIdx - 1;
  }

  // 合并凹处
  for (let i = 0; i < holes.length; ) {
    if (i + 1 < holes.length) {
      if (holes[i][1] === holes[i + 1][0]) {
        if (height[holes[i][0]] >= height[holes[i][1]] && height[holes[i + 1][1]] >= height[holes[i + 1][0]]) {
          holes[i][1] = holes[i + 1][1];
          holes.splice(i + 1, 1);
          //
          i = 0;
          continue;
        }
      }
    }

    ++i;
  }

  let totallyCap = 0;
  for (let h of holes) {
    totallyCap += calCapacity(height, h[0], h[1]);
  }

  return totallyCap;
}

function calCapacity(height: number[], from: number, end: number): number {
  const topHeight = Math.min(height[from], height[end]);
  let capacity = 0;

  for (let i = from + 1; i < end; ++i) {
    if (height[i] < topHeight) {
      capacity += topHeight - height[i];
    }
  }

  return capacity;
}

console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([5, 4, 1, 2]));
console.log(trap([8, 8, 1, 5, 6, 2, 5, 3, 3, 9]));

export {};
