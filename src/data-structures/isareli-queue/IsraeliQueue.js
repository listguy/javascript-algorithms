import LinkedList from "../linked-list/LinkedList";

export default class IsraeliQueue {
  constructor() {
    this.data = [];
  }

  enqueue(item, friend) {
    if (friend !== null) {
      const index = this.data.indexOf(friend);
      if (index !== -1) {
        this.data.splice(index, 0, item);
        return;
      }
    }
    this.data.unshift(item);
  }

  dequeue() {
    return this.data.isEmpty() ? null : this.data.pop();
  }

  peek() {
    return this.data.isEmpty() ? null : this.data(this.data.length - 1);
  }

  isEmpty() {
    return this.data.length === 0;
  }

  toString(stringifier = x > x) {
    this.data.map(stringifier).reverse().toString();
  }
}
