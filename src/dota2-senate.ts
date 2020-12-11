/**
 * 649. Dota2 参议院: https://leetcode-cn.com/problems/dota2-senate/
 * 
 * 在每一轮中，每一位参议员都可以行使两项权利中的一项：
 * 1. 禁止一名参议员的权利：参议员可以让另一位参议员在这一轮和随后的几轮中丧失所有的权利。
 * 2. 宣布胜利：如果参议员发现有权利投票的参议员都是同一个阵营的，他可以宣布胜利并决定在游戏中的有关变化。
 */

{
  function predictPartyVictory(senate: string): string {
    const ptArr: string[] = senate.split("");

    let idx: number = 0;
    while (ptArr.length > 1) {
      let tChar = ptArr[idx] === "R" ? "D" : "R";

      // NOTE: 先往后面找
      let tIdx = ptArr.indexOf(tChar, idx);

      if (tIdx === -1) {
        // NOTE: 再找整个字符串
        tIdx = ptArr.indexOf(tChar);

        // NOTE: 整个字符串都找不到了，直接返回
        if (tIdx === -1) {
          break;
        }
      }

      ptArr.splice(tIdx, 1);

      idx++;

      // NOTE: 本轮结束，进行下一轮
      if (idx >= ptArr.length) {
        idx = 0;
      }
    }

    return ptArr[0] === "R" ? "Radiant" : "Dire";
  }

  console.log(predictPartyVictory("RD")); // R
  console.log(predictPartyVictory("RRD")); // R
  console.log(predictPartyVictory("RDD")); // D
  console.log(predictPartyVictory("DDRRR")); // D
  console.log(predictPartyVictory("RRDDD")); // R
  console.log(predictPartyVictory("DRRD")); // D
}
