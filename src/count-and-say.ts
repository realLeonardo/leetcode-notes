/**
 * 38. 外观数列: https://leetcode-cn.com/problems/count-and-say/
 *
 * 给定一个正整数 n ，输出外观数列的第 n 项。
 */

function countAndSay(n: number): string {
  let result = "1";
  let idx = 1;

  while (idx < n) {
    let temp = "";

    for (let i = 0; i < result.length; ++i) {
      let count = 1;
      let current = result[i];

      while (i + 1 < result.length && result[i] === result[i + 1]) {
        ++count;
        ++i;
      }

      temp += `${count}${current}`;
    }

    result = temp;
    ++idx;
  }

  return result;
}

console.log(countAndSay(2));
console.log(countAndSay(4));
console.log(countAndSay(5));

export {};
