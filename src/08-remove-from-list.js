/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
function removeKFromList(l, k) {
  //  предыдущий элемент перед текущим
  let prevElement = null;

  // голова списка (самый первый элемент)
  let headElement = l;

  //  текущий элемент списка
  let currentElement = headElement;

  while (currentElement) {
    if (currentElement.value === k) {
      if (prevElement) {
        //  чтобы удалить текущий элемент, нужно присвоить следующему элементу
        //  после предыдущего следующий элемент после текущего
        prevElement.next = currentElement.next;
      } else {
        //  если голова совпадает с заданным элементом, то переносим голову на следующий
        //  элемент
        headElement = headElement.next;
      }
    } else {
      prevElement = currentElement;
    }
    // простой переход по элементам списка
    currentElement = currentElement.next;
  }
  return headElement;
}

module.exports = removeKFromList;
