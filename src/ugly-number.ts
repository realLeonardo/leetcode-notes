/**
 * 263. 丑数: https://leetcode-cn.com/problems/ugly-number/
 *
 * 编写一个程序判断给定的数是否为丑数。
 * 丑数就是只包含质因数 2, 3, 5 的正整数。
 */
function isUgly(num: number): boolean {
  if (num <= 0) {
    return false;
  }

  while (true) {
    if ([1, 2, 3, 5].indexOf(num) !== -1) {
      return true;
    }

    if (num % 2 === 0) {
      num /= 2;
    } else if (num % 3 === 0) {
      num /= 3;
    } else if (num % 5 === 0) {
      num /= 5;
    } else {
      return false;
    }
  }
}

console.log(isUgly(2));
console.log(isUgly(4));
console.log(isUgly(6));
console.log(isUgly(7));

export {};
