const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.length = 0;
    this.head = {};
    this.tail = {};
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    if (this.length === 0) {
      this.head = new ListNode(element);
      this.tail = this.head;
    } else {
      this.tail.next = new ListNode(element);
      this.tail = this.tail.next;
    }
    this.length++;
  }

  dequeue() {
    const res = this.head.value;
    this.head = this.head.next;
    this.length--;
    return res;
  }
}

module.exports = Queue;
