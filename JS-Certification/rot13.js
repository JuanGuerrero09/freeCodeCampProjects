function rot13(str) {
  let result = "";
  for (let i in str) {
    let value = str.codePointAt(i);
    if (65 <= value && value <= 90) {
      let newNumber = value + 13;
      if (newNumber > 90) {
        result += String.fromCharCode(newNumber - 26);
        continue;
      }
      result += String.fromCharCode(newNumber);
      continue;
    }
    result += str[i];
  }
  return result;
}

rot13("SERR CVMMN!");
