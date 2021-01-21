/**
 * 13. 罗马数字转整数: https://leetcode-cn.com/problems/roman-to-integer/
 *
 * "III" -> 3
 * "IV" -> 4
 * "IX" -> 9
 * "MCMXCIV" -> 1994
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4.
 *
 * 从右往左读
 */
function romanToInt(s: string): number {
  type RomanChar = "I" | "V" | "X" | "L" | "C" | "D" | "M";
  const romanCharVals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let lastValue = romanCharVals[s[s.length - 1] as RomanChar];
  let finalValue = lastValue;

  for (let i = s.length - 2; i >= 0; --i) {
    const currentChar = s[i] as RomanChar;
    const currentValue = romanCharVals[currentChar];
    console.log(currentValue, lastValue);

    if (currentValue < lastValue) {
      finalValue -= currentValue;
    } else {
      finalValue += currentValue;
    }
    lastValue = currentValue;
  }

  return finalValue;
}

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("MCMXCIV"));

export {};
