/**
 * 剑指 Offer 05. 替换空格: https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 * 
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 */
function replaceSpace(s: string): string {
  while (s.indexOf(" ") !== -1) {
    s = s.replace(" ", "%20");
  }
  return s;
}

console.log(replaceSpace("We are happy."));

export {};
