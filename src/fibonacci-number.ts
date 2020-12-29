/**
 * 509. Fibonacci Number: https://leetcode-cn.com/problems/fibonacci-number/
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), for N > 1.
 * Given N, calculate F(N).
 *
 * 2 -> F(1)+F(0) -> 1
 * 3 -> F(2)+F(1) -> 1 + 1 -> 2
 * 4 -> F(3)+F(2) -> 2 + 1 -> 3
 */

/**
 * 思路：
 * F(0) = 0
 * F(1) = 1
 * F(i) = F(i-1)+F(i-2)
 */
function fib(N: number): number {
  if (N < 1) {
    return 0;
  } else if (N === 1) {
    return 1;
  }

  let pre = 0,
    curr = 1;
  for (let i = 2; i <= N; ++i) {
    const temp = pre + curr;
    pre = curr;
    curr = temp;
  }

  return curr;
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));

export {};
