/**
 * 767. Reorganize String: https://leetcode-cn.com/problems/reorganize-string/
 *
 * Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.
 * If possible, output any possible result.  If not possible, return the empty string.
 *
 * 1. "aab" -> "aba"
 * 2. "aaab" -> ""
 * 3. "babaa" -> "ababa"
 * 4. "abbabbaaab" -> "ababababab"
 * 5. "xogbmcjjie" -> "jgjibmcoex"
 * 6. "ogccckcwmbmxtsbmozli" -> "cocgcickmlmsmtbwbxoz"
 */

/**
 * 思路：
 * 1. 把字符串分割成字符数组；
 * 2. 根据字符数量进行排序，重复多的再前面；
 * 3. 如果重复最多的元素个数>size/2+1，则返回""，否则继续；
 * 4. 遍历插入
 */
function reorganizeString(s: string): string {
  const charArray: string[] = s.split("");
  const charSet: { char: string; count: number }[] = [];
  const strLength: number = charArray.length;

  for (const char of charArray) {
    let existFlag: boolean = false;

    for (let i of charSet) {
      if (i.char === char) {
        existFlag = true;
        i.count++;
        break;
      }
    }

    if (!existFlag) {
      charSet.push({
        char,
        count: 1,
      });
    }
  }

  charSet.sort((a, b) => {
    if (a.count === b.count) {
      return a.char.charCodeAt(0) - b.char.charCodeAt(0);
    } else {
      return b.count - a.count;
    }
  });

  // NOTE: 判断是否为无法重构的字符串
  if (charSet.length === 0 || charSet[0].count > Math.ceil(strLength / 2)) {
    return "";
  }

  let pIndex: number = 0;
  for (const i of charSet) {
    while (i.count > 0) {
      if (pIndex >= strLength) {
        // NOTE: 这里应该只会执行一次
        pIndex = 1;
      }
      charArray[pIndex] = i.char;
      i.count--;
      pIndex += 2;
    }
  }

  return charArray.join("");
}

// NOTE: 简单的测试用例
console.log(reorganizeString("") === "");
console.log(reorganizeString("aab") === "aba");
console.log(reorganizeString("babaa") === "ababa");
console.log(reorganizeString("abbabbaaab") === "ababababab");
console.log(reorganizeString("xogbmcjjie") === "jgjibmcoex");
console.log(reorganizeString("ogccckcwmbmxtsbmozli") === "cocgcickmlmsmtbwbxoz");

export {};
