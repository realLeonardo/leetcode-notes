/**
 * 56. Merge Intervals: https://leetcode-cn.com/problems/merge-intervals/
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], 
 * merge all overlapping intervals, 
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
 * [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]
 * [[1,4],[4,5]] -> [[1,5]]
 */

{
  /**
   * 思路：
   * 两个指针遍历，如果第一个数组的尾数大于等于第二个数组的首数，则尝试合并
   * 
   */
  function merge(intervals: number[][]): number[][] {
    if (intervals.length === 1) {
      return intervals;
    }

    // NOTE: 先排序
    intervals.sort((a, b) => a[0] - b[0]);

    let idx1 = 0, idx2 = 1;

    while (idx2 < intervals.length) {
      let first = intervals[idx1], second = intervals[idx2];

      if (first[1] >= second[0]) {
        first[1] = second[1] > first[1] ? second[1] : first[1];
        intervals.splice(idx2, 1);
        intervals[idx1] = first;
      } else {
        ++idx1;
        ++idx2;
      }
    }

    return intervals;
  }

  console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
  console.log(merge([[1, 4], [5, 6]]));
}
