/**
 * 67. 二进制求和: https://leetcode-cn.com/problems/add-binary/
 * 
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 输入为 非空 字符串且只包含数字 1 和 0。
 * 
 */
function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;

  let over: boolean = false;
  let result = "";

  while (i >= 0 || j >= 0) {
    let ai = i >= 0 ? a[i] : "0";
    let bj = j >= 0 ? b[j] : "0";

    if (bj === ai && bj === "1") {
      if (over) {
        result = "1" + result;
      } else {
        result = "0" + result;
      }

      over = true;
    } else if (bj === ai && bj === "0") {
      if (over) {
        result = "1" + result;
        over = false;
      } else {
        result = "0" + result;
      }
    } else {
      if (over) {
        result = "0" + result;
        over = true;
      } else {
        result = "1" + result;
      }
    }

    --i;
    --j;
  }

  if (over) {
    result = "1" + result;
  }

  return result;
}

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));

export {};
