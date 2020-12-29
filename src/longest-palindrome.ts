/**
 * 5. Longest Palindromic Substring: https://leetcode-cn.com/problems/longest-palindromic-substring/
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * 1. "babad" -> "bab"
 * 2. "cbbd" -> "bb"
 * 3. "a" -> "a"
 */

/**
 * 感觉有点难啊？涉及到了动态规划？
 *
 * 1. 暴力解法：穷举出所有子串，并判断其是否为回文串，取其中最长的作为结果
 */
function longestPalindrome(s: string): string {
  const charArr: string[] = s.split("");
  let maxLength: number = 1;
  let index: number = 0;

  for (let i = 0; i < charArr.length - 1; i++) {
    for (let j = i + 1; j < charArr.length; j++) {
      if (j - i + 1 > maxLength && validCharArr(charArr, i, j)) {
        maxLength = j - i + 1;
        index = i;
      }
    }
  }

  let result: string = "";
  for (let i = 0; i < maxLength; i++) {
    result += charArr[index + i];
  }

  return result;
}

/**
 * 判断是否为回文串
 * @param arr 字符数组
 * @param from begin index
 * @param to end index
 */
function validCharArr(arr: string[], from: number, to: number): boolean {
  let result = true;

  while (from < to) {
    if (arr[from] !== arr[to]) {
      result = false;
      break;
    } else {
      ++from;
      --to;
    }
  }

  return result;
}

/**
 * 2. 动态规划
 * Q: 什么是动态规划？
 * A: 穷举 + '备忘录' + 自底向上
 */
function longestPalindromeDP(s: string): string {
  const dp: boolean[][] = new Array();
  // NOTE: 初始化 dp table
  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
  }

  let result: string = "";

  for (let l = 0; l < s.length; ++l) {
    for (let i = 0; i + l < s.length; ++i) {
      const j = i + l;

      if (l === 0) {
        dp[i][j] = true;
      } else if (l === 1) {
        dp[i][j] = s.charAt(i) === s.charAt(j);
      } else {
        dp[i][j] = s.charAt(i) === s.charAt(j) && dp[i + 1][j - 1];
      }

      if (dp[i][j] && l + 1 > result.length) {
        result = s.substr(i, l + 1);
      }
    }
  }

  return result;
}

// NOTE: just for test
console.log(longestPalindromeDP("babad"));

export {};
