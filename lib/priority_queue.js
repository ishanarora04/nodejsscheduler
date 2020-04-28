const EMPTY_QUEUE = "EMPTY_QUEUE";

class PriorityQueue {
  constructor() {
    this.array = [];
  }

  insert(elem) {
    this.array.splice(0, 0, elem);
    this.heapify();
  }

  get() {
    if (this.array.length == 0) {
      return EMPTY_QUEUE;
    }
    const output = this.array[0];
    const last_elem = this.array.pop();
    if (this.array.length > 0) {
      this.array.splice(0, 1, last_elem);
      this.heapify();
    }
    return output;
  }

  peek() {
    if (this.array.length == 0) {
      return EMPTY_QUEUE;
    }
    return this.array[0];
  }

  heapify() {
    let left_child,
      right_child,
      index = 0;
    let queue_length = this.array.length;
    let i = 0;

    while (index < queue_length) {
      index = i;
      left_child = 2 * i + 1;
      right_child = 2 * i + 2;

      debugger;

      if (left_child < queue_length) {
        if (this.compare(this.array[left_child], this.array[i])) {
          index = left_child;
        }
      }

      if (right_child < queue_length) {
        if (
          this.compare(this.array[right_child], this.array[i]) &&
          this.compare(this.array[right_child], this.array[left_child])
        ) {
          index = right_child;
        }
      }

      if (index == i) {
        return;
      }
      this.swap(i, index);
      i = index;
    }
  }

  compare(elem1, elem2) {
    return elem1 < elem2;
  }

  swap(i, j) {
    let temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  queue_length() {
    return this.array.length;
  }
}

exports.PriorityQueue = PriorityQueue;
exports.EMPTY_QUEUE = EMPTY_QUEUE;
