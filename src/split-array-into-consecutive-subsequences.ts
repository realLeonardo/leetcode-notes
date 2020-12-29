/**
 * 659. Split Array into Consecutive Subsequences: https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/
 *
 * Given an array nums sorted in ascending order,
 * return true if and only if you can split it into 1 or
 * more subsequences such that each subsequence consists of consecutive integers and has length at least 3.
 *
 * [1,2,3,3,4,5] -> [1,2,3] + [3,4,5] -> true
 * [1,2,3,4,4,5] -> [1,2,3,4] + [4,5] -> false
 */

function isPossible(nums: number[]): boolean {
  const arrs: number[][] = [[]];

  if (nums.length < 3) {
    return false;
  }

  arrs[0][0] = nums.shift() as number;

  for (const n of nums) {
    // NOTE: 标记当前数是否有用
    let flag: boolean = false;

    for (let i = 0; i < arrs.length; ++i) {
      const last = arrs[i][arrs[i].length - 1];

      if (last === n - 1) {
        arrs[i].push(n);
        flag = true;
        break;
      }

      if (last === n && i === arrs.length - 1) {
        arrs.push([n]);
        flag = true;
        break;
      }

      if (last !== n - 1 && i === arrs.length - 1) {
        arrs.push([n]);
        flag = true;
        break;
      }
    }

    if (!flag) {
      return false;
    }

    // NOTE: 优先安排给长度短的
    arrs.sort((a, b) => a.length - b.length);
  }

  for (const a of arrs) {
    if (a.length < 3) {
      return false;
    }
  }

  return true;
}

console.log(isPossible([1, 2, 3, 4, 6, 7, 8, 9, 10, 11]));
console.log(isPossible([1, 2, 3, 3, 4, 4, 5]));
console.log(isPossible([1, 2, 3, 4, 4]));
console.log(isPossible([1, 1, 2, 2, 3, 3, 4, 4]));

export {};
