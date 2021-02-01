/**
 * 剑指 Offer 46. 把数字翻译成字符串: https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
 *
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
 * 一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
 */
function translateNum(num: number): number {
  const numStr = num.toFixed();
  const dp = [1];

  for (let i = 1; i < numStr.length; ++i) {
    const preStr = numStr.substr(i - 1, 2);

    if (preStr <= "25" && preStr >= "10") {
      if (i > 1) {
        dp[i] = dp[i - 1] + dp[i - 2];
      } else {
        dp[i] = dp[i - 1] + 1;
      }
    } else {
      dp[i] = dp[i - 1];
    }
  }

  return dp[numStr.length - 1];
}

console.log(translateNum(1));
console.log(translateNum(26111));
console.log(translateNum(119));
// console.log(translateNum(220));
console.log(translateNum(18822));
// console.log(translateNum(319));
// console.log(translateNum(12587));

export {};
