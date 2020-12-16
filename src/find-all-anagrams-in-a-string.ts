/**
 * 438. 找到字符串中所有字母异位词: https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 * 
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
 * 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 * 说明：
 * 字母异位词指字母相同，但排列不同的字符串。
 * 不考虑答案输出的顺序。
 * 
 * s: "cbaebabacd" p: "abc" -> [0, 6]
 */

{
  function findAnagrams(s: string, p: string): number[] {
    if (p.length > s.length) {
      return [];
    }

    const needs: Map<String, Number> = new Map();
    const windows: Map<String, Number> = new Map();

    const res = [];

    for (const c of p) {
      const count = needs.get(c);

      if (count === undefined) {
        needs.set(c, 1);
      } else {
        needs.set(c, (count as number) + 1);
      }
    }

    const pLength = p.length;
    let currSize = 0;

    for (let i = 0; i < s.length; i++) {
      const currChar = s[i];

      if (!needs.has(currChar)) {
        windows.clear();
        currSize = 0;
        continue;
      }

      if (currSize === pLength) {
        const c = s[i - pLength];
        windows.set(c, (windows.get(c) as number) - 1);
        --currSize;
      }

      const count = windows.get(currChar);

      if (count === undefined) {
        windows.set(currChar, 1);
      } else {
        windows.set(currChar, (count as number) + 1);
      }

      ++currSize;
      if (currSize !== pLength) {
        continue;
      }

      let equal: boolean = true;
      for (const i of needs.keys()) {
        if (needs.get(i) !== windows.get(i)) {
          equal = false;
          break;
        }
      }

      if (equal) {
        res.push(i + 1 - pLength);
      }
    }

    return res;
  }

  console.log(findAnagrams("cbaebabacd", "abc"));
}
