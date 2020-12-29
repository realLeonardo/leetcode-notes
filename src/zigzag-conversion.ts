/**
 * 6. Z 字形变换: https://leetcode-cn.com/problems/zigzag-conversion/
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 */

function convert(s: string, numRows: number): string {
  const charArr: string[] = s.split("");
  const convertArr: string[][] = [];

  if (numRows === 1) {
    return s;
  }

  // NOTE: 初始化
  for (let i = 0; i < numRows; ++i) {
    convertArr[i] = [];
  }

  /**
   * currIdx: 为当前index
   * currDrc: 为当前遍历方向，0,1,2/2,1,0
   */
  let currIdx = 0,
    currDrc = 1;

  for (const c of charArr) {
    convertArr[currIdx].push(c);

    if (currIdx === numRows - 1) {
      currDrc = -1;
      currIdx = numRows - 2;
    } else if (currIdx === 0) {
      currDrc = 1;
      currIdx = 1;
    } else {
      currIdx += currDrc;
    }
  }

  const resultArr: string[] = [];

  for (const a of convertArr) {
    resultArr.push(...a);
  }

  return resultArr.join("");
}

console.log(convert("AB", 1));
console.log(convert("PAYPALISHIRING", 3));
console.log(convert("LEETCODEISHIRING", 3));

export {};
