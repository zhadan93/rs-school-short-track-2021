/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s2Mas = s2.split('');
  let commonCharactersNumber = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s2Mas.includes(s1[i])) {
      s2Mas.splice(s2Mas.indexOf(s1[i]), 1);
      commonCharactersNumber++;
    }
  }

  return commonCharactersNumber;
}

module.exports = getCommonCharacterCount;
