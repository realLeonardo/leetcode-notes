/**
 * 8. 字符串转换整数 (atoi): https://leetcode-cn.com/problems/string-to-integer-atoi/
 *
 * 请你来实现一个 atoi 函数，使其能将字符串转换成整数。
 *
 * "42" -> 42
 * "    -42" -> -42
 *
 */
function myAtoi(s: string): number {
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  let result = parseInt(s);
  if (result < INT_MIN) {
    result = INT_MIN;
  } else if (result > INT_MAX) {
    result = INT_MAX;
  }

  if (isNaN(result)) {
    result = 0;
  }

  return result;
}

console.log(myAtoi("42"));
console.log(myAtoi("     -42"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));

export {};
