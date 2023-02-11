function convertToRoman(num) {
  const SYMBOLS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";
  for (key in SYMBOLS) {
    repeat = Math.floor(num / SYMBOLS[key]);
    result += key.repeat(repeat);
    num %= SYMBOLS[key];
  }
  return result;
}

console.log(convertToRoman(12))
