const palindromes = function (str) {
  const alphaNumeric = "abcdefghijklmnopqrstuvwxyz1234567890";

  const cleanedString = str
    .toLowerCase()
    .split("")
    .filter((character) => alphaNumeric.includes(character))
    .join("");

  const reversedString = cleanedString.split("").reverse().join("");

  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
