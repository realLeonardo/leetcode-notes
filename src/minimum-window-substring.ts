/**
 * 76. 最小覆盖子串: https://leetcode-cn.com/problems/minimum-window-substring/
 * 
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * s = "ADOBECODEBANC", t = "ABC" -> "BANC"
 * s = "a", t = "a" -> "a"
 */

{
  /**
   * 滑动窗口法
   * 如何判断是否符合 “s中涵盖t所有字符”: 用map
   */
  function minWindow(s: string, t: string): string {
    if (s.length < t.length) {
      return "";
    }

    let left = 0, right = 0;
    let finalLeft = -1, finalLength = 0;

    const needs: Map<String, Number> = new Map();
    const windows: Map<String, Number> = new Map();

    for (const n of t) {
      let count = needs.get(n);

      if (count === undefined) {
        count = 0;
      }
      needs.set(n, (count as number) + 1);
    }

    while (right < s.length) {
      if (!needs.has(s[right])) {
        ++right;
        continue;
      }

      let count = windows.get(s[right]);
      if (count === undefined) {
        count = 0;
      }
      windows.set(s[right], (count as number) + 1);

      let isContain: boolean = true;

      for (let i of needs.keys()) {
        if (
          !windows.get(i) ||
          (windows.get(i) as number) < (needs.get(i) as number)
        ) {
          isContain = false;
          break;
        }
      }

      ++right;

      // NOTE: 未找到符合的子串
      if (!isContain) {
        continue;
      }

      if (finalLength == 0 || right - left < finalLength) {
        finalLeft = left;
        finalLength = right - left;
      }

      // NOTE: 找到最优子串
      while (isContain) {
        if (!needs.has(s[left])) {
          ++left;

          // NOTE: 更新记录
          if (finalLength == 0 || right - left < finalLength) {
            finalLeft = left;
            finalLength = right - left;
          }
          continue;
        }

        windows.set(s[left], (windows.get(s[left]) as number) - 1);
        ++left;

        // NOTE: check the containable
        for (const i of needs.keys()) {
          if (
            !windows.get(i) ||
            (windows.get(i) as number) < (needs.get(i) as number)
          ) {
            isContain = false;
            break;
          }
        }

        if (isContain) {
          // NOTE: 更新记录
          if (finalLength == 0 || right - left < finalLength) {
            finalLeft = left;
            finalLength = right - left;
          }
        }
      }
    }

    return s.substr(finalLeft, finalLength);
  }

  console.log(minWindow("ADOBECODEBANC", "ABC"));
  console.log(minWindow("a", "a"));
  console.log(minWindow("bdab", "ab"));
}
