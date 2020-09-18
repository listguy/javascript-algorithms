import LinkedList from "../linked-list/LinkedList";

export default class Queue {
  constructor() {
    this.data = [];
    // We're going to implement Queue based on LinkedList since the two
    // structures are quite similar. Namely, they both operate mostly on
    // the elements at the beginning and the end. Compare enqueue/dequeue
    // operations of Queue with append/deleteHead operations of LinkedList.
    this.linkedList = new LinkedList();
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    // return !this.linkedList.head;
    return this.data.length === 0;
  }

  /**
   * Read the element at the front of the queue without removing it.
   * @return {*}
   */
  peek() {
    // if (!this.linkedList.head) {
    //   return null;
    // }

    // return this.linkedList.head.value;
    return this.data.isEmpty() ? null : this.data[0];
  }

  /**
   * Add a new element to the end of the queue (the tail of the linked list).
   * This element will be processed after all elements ahead of it.
   * @param {*} value
   */
  enqueue(value) {
    // this.linkedList.append(value);
    this.data.push(value);
  }

  /**
   * Remove the element at the front of the queue (the head of the linked list).
   * If the queue is empty, return null.
   * @return {*}
   */
  dequeue() {
    // const removedHead = this.linkedList.deleteHead();
    // return removedHead ? removedHead.value : null;

    return this.data.peek() ? this.data.shift() : null;
  }

  /**
   * @param [callback]
   * @return {string}
   */
  toString(callback = (x) => x) {
    // Return string representation of the queue's linked list.
    // return this.linkedList.toString(callback);
    return this.data.map(callback).toString();
  }
}
