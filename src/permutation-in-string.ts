/**
 * 567. 字符串的排列: https://leetcode-cn.com/problems/permutation-in-string/
 * 
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 * 换句话说，第一个字符串的排列之一是第二个字符串的子串。
 * 
 * s1 = "ab" s2 = "eidbaooo" -> True
 */

{
  // 如何判断 "第一个字符串的排列之一是第二个字符串的子串"
  // 1. 将第一个字符串重新排序
  // 2. 对第二个字符串进行遍历，取子串排序后进行对比
  // 3. 如果相等，则无需
  function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
      return false;
    }

    const needs: Map<String, Number> = new Map();
    const windows: Map<String, Number> = new Map();

    for (const c of s1) {
      const count = needs.get(c);

      if (count === undefined) {
        needs.set(c, 1);
      } else {
        needs.set(c, (count as number) + 1);
      }
    }

    const s1Length = s1.length;
    let currSize = 0;

    for (let i = 0; i < s2.length; i++) {
      const currChar = s2[i];

      if (!needs.has(currChar)) {
        windows.clear();
        currSize = 0;
        continue;
      }

      if (currSize === s1Length) {
        const c = s2[i - s1Length];
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
      if (currSize !== s1Length) {
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
        return true;
      }
    }

    return false;
  }

  console.log(checkInclusion("ba", "beidbbaooo"));
  console.log(
    checkInclusion(
      "trinitrophenylmethylnitramine",
      "dinitrophenylhydrazinetrinitrophenylmethylnitramine",
    ),
  );
}
