/**
 * 22. 括号生成: https://leetcode-cn.com/problems/generate-parentheses/
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 */

function generateParenthesis(n: number): string[] {
  if (n === 0) {
    return [""];
  }
  let result: string[] = ["()"];

  while (n > 1) {
    const tempSet: Set<string> = new Set();

    for (const [idx, str] of result.entries()) {
      for (let i = 0; i < str.length; i++) {
        tempSet.add(str.slice(0, i) + "()" + str.slice(i));
      }
    }
    result = Array.from(tempSet);
    n--;
  }

  return result;
}

console.log(generateParenthesis(3));
console.log(generateParenthesis(2));

export {};
