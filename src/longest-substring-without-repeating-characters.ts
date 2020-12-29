/**
 * 3. 无重复字符的最长子串: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * "abcabcbb" -> 3
 * "bbbbb" -> 1
 */

/**
 * 滑动窗口
 *
 * int left = 0, right = 0;
 * while (right < s.size()) {
 *   window.add(s[right]);
 *   right++;
 *
 *   while (valid) {
 *     window.remove(s[left]);
 *     left++;
 *   }
 * }
 */
function lengthOfLongestSubstring(s: string): number {
  if (s.length < 2) {
    return s.length;
  }

  const windows: Map<String, Number> = new Map();
  let maxSize = 0;
  let left = 0,
    right = 0;

  while (right < s.length) {
    const currChar = s[right];
    let count = windows.get(currChar) as number;

    if (count === undefined) {
      count = 0;
    }
    windows.set(currChar, count + 1);

    while ((windows.get(currChar) as number) > 1) {
      const before = s[left];

      const bc = windows.get(before) as number;
      windows.set(before, bc - 1);

      if (bc === 1) {
        windows.delete(before);
      }
      left++;
    }

    maxSize = maxSize > windows.size ? maxSize : windows.size;
    right++;
  }

  return maxSize;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("dvdcdf"));

export {};
