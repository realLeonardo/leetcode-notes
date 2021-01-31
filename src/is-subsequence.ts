/**
 * 392. 判断子序列: https://leetcode-cn.com/problems/is-subsequence/
 *
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 */
function isSubsequence(s: string, t: string): boolean {
  const sArr = s.split("");
  const tArr = t.split("");
  let lastIndex = -1;

  for (let i = 0; i < s.length; ++i) {
    const idx = tArr.slice(lastIndex + 1).indexOf(sArr[i]);
    if (idx === -1) {
      return false;
    }

    lastIndex = lastIndex + 1 + idx;
  }

  return true;
}

console.log(isSubsequence("a", "a"));
console.log(isSubsequence("aaaaaa", "bbaaaa"));

export {};
