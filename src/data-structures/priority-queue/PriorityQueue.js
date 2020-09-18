export default class PriorityQueue {
  constructor() {
    this.data = [];
  }

  add(item, priority = 0) {
    for (let i = 0; i < this.size; i++) {
      if (
        (priority === this.data[i][1] && item > this.data[i][0]) ||
        priority > this.data[i][1]
      ) {
        this.data.splice(i, 0, [item, priority]);
        return;
      }
    }
    this.data.push([item, priority]);
  }

  peek() {
    return this.size ? this.data[this.size - 1][0] : null;
  }

  poll() {
    return this.data.pop()[0];
  }

  changePriority(item, nPriority) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i][0] === item) {
        this.data.splice(i, 1);
        this.add(item, nPriority);
        return;
      }
    }
    return -1;
  }

  hasValue(value) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i][0] === value) {
        return true;
      }
    }
    return false;
  }

  get size() {
    return this.data.length;
  }
}
