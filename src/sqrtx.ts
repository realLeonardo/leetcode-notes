/**
 * 69. x 的平方根: https://leetcode-cn.com/problems/sqrtx/
 *
 * 实现 int sqrt(int x) 函数。
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 */
function mySqrt(x: number): number {
  return Math.floor(Math.sqrt(x));
}

console.log(mySqrt(8));
console.log(mySqrt(4));

export {};
