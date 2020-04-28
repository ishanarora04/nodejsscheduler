const chai = require("chai");
const expect = chai.expect;
const PriorityQueue = require("../lib/priority_queue").PriorityQueue;
const EMPTY_QUEUE = require("../lib/priority_queue").EMPTY_QUEUE;

describe("Priority Queue", () => {
  let queue = new PriorityQueue();

  before(() => {
    queue.insert(10);
    queue.insert(8);
    queue.insert(20);
    queue.insert(1);
  });

  it.skip("Get method should provide the minimum element", () => {
    const elem = queue.get();
    expect(elem).to.equal(1);
  });

  it.skip("peek should return the minimum element and not pop", () => {
      const queue_length = queue.queue_length()
      const elem = queue.peek();
      expect(queue.queue_length()).to.equal(queue_length);
  });

  it.skip("Return empty queue on the 5th time", () => {
    queue.get();
    queue.get();
    queue.get();
    const output = queue.get();
    expect(output).to.equal(EMPTY_QUEUE);
  });
});
