/**
 * 剑指 Offer 40. 最小的k个数: https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 *
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 */
function getLeastNumbers(arr: number[], k: number): number[] {
  if (k === arr.length) {
    return arr;
  }

  arr.sort((a, b) => a - b);
  return arr.slice(0, k);
}

console.log(getLeastNumbers([3, 2, 1], 2));
console.log(getLeastNumbers([0, 1, 2, 1], 3));

export {};
