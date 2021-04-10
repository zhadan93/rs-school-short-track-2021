/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsCollection = {};

  for (let i = 0; i < domains.length; i++) {
    let dnsString = '';
    const mas = domains[i].split('.').reverse();

    for (let j = 0; j < mas.length; j++) {
      dnsString += `.${mas[j]}`;
      if (dnsString in dnsCollection) {
        dnsCollection[dnsString] += 1;
      } else {
        dnsCollection[dnsString] = 1;
      }
    }
  }
  return dnsCollection;
}

module.exports = getDNSStats;
