/**
 * 204. Count Primes: https://leetcode-cn.com/problems/count-primes/
 * 
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * 10 -> 4: 2,3,5,7
 * 0 -> 0
 * 1 -> 0
 */

/**
 * 思路：
 * 默认所有数都为质数。
 * 如果 x 是质数，那么大于 x 的 x 的倍数 2x,3x, … 一定不是质数。
 */
function countPrimes(n: number): number {
  if (n <= 1) {
    return 0;
  }

  const flag: number[] = [];
  // NOTE: 默认所有数都是质数
  for (let i = 0; i < n; ++i) {
    flag[i] = 1;
  }

  for (let i = 2; i < n; ++i) {
    let temp = 0;
    
    /**
     * 表示质数的倍数为非质数
     * TODO: 为什么这里从 i*i 开始，而不是 i*2?
     */
    for (let j = i * i; j < n; j += i) {
      flag[j] = 0;
      ++temp;
    }

    // NOTE: i*i >= n时，可以认为已经完成遍历
    if (temp == 0) {
      break;
    }
  }

  // NOTE: 计算所有质数个数
  let count = 0;
  for (let i = 2; i < n; ++i) {
    if (flag[i] === 1) {
      count++;
    }
  }

  return count;
}

console.log(countPrimes(10));
console.log(countPrimes(13));
