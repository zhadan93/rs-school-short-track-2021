/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const encodeMas = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count) encodeMas.push(count + 1);
      encodeMas.push(str[i]);
      count = 0;
    }
  }
  return encodeMas.join('');
}

module.exports = encodeLine;
