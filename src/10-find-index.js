/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let lastIndex = array.length - 1;
  let firstIndex = 0;
  let medium = null;
  let res = null;

  while (lastIndex > firstIndex) {
    medium = Math.trunc((lastIndex - firstIndex) / 2) + firstIndex;
    if (value === array[medium]) {
      return medium;
    }
    if (value < array[medium]) {
      lastIndex = medium - 1;
      res = lastIndex;
    } else {
      firstIndex = medium + 1;
      res = firstIndex;
    }
  }
  return res;
}

module.exports = findIndex;
