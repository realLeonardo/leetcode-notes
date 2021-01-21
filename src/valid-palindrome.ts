/**
 * 125. 验证回文串: https://leetcode-cn.com/problems/valid-palindrome/
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *
 * 思路：
 * 1. 去掉除字母、数字字符以外的所有字符，并将结果字符串改成小写；
 * 2. 从两头同时开始遍历；
 *
 * 最后做法：
 * 1. 写出一个只匹配小写字母和数字的正则；
 * 2. 将字符串转小写；
 * 3. 从两头同时开始遍历；
 *
 */
function isPalindrome(s: string): boolean {
  const reg = /[a-z0-9]+/;
  s = s.toLowerCase();

  for (let i = 0, j = s.length - 1; i < j; ) {
    if (!reg.test(s[i])) {
      ++i;
      continue;
    }

    if (!reg.test(s[j])) {
      --j;
      continue;
    }

    if (s[i] !== s[j]) {
      return false;
    } else {
      ++i;
      --j;
    }
  }

  return true;
}

console.log(isPalindrome("race a car"));
console.log(isPalindrome("ab_a"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));

export {};
