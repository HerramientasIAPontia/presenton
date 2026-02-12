function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

function reverseLetters(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function replaceVowels(str) {
  return str.replace(/[aeiou]/gi, '@');
}

module.exports = {
  reverseWords,
  reverseLetters,
  replaceVowels,
};
