/**
 * 72. Edit Distance: https://leetcode-cn.com/problems/edit-distance/
 *
 * Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
 * You have the following three operations permitted on a word:
 * - Insert a character
 * - Delete a character
 * - Replace a character
 *
 * "horse", "ros" -> 3
 * "intention", "execution" -> 5
 */

/**
 * 动态规划
 * dp[i][j]: number = X
 * 让长度为 i 的字符串变为长度为 j 的字符串需要 X 步
 */
function minDistance(word1: string, word2: string): number {
  const dp: number[][] = [];

  for (let i = 0; i <= word1.length; ++i) {
    dp[i] = [];
    // NOTE: 表示长度为0的字符串变为长度为i的字符串需要i步
    dp[i][0] = i;
  }

  // NOTE: 同上
  for (let i = 1; i <= word2.length; ++i) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= word1.length; ++i) {
    for (let j = 1; j <= word2.length; ++j) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[word1.length][word2.length];
}

console.log(minDistance("horse", "ros"));

export {};
