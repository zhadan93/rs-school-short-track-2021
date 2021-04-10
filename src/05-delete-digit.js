/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringOfNumber = String(n);
  const numberPairsMas = [];

  for (let i = 0; i < stringOfNumber.length; i++) {
    numberPairsMas.push(+(stringOfNumber.slice(0, i) + stringOfNumber.slice(i + 1)));
  }
  return Math.max(...numberPairsMas);
}

module.exports = deleteDigit;
