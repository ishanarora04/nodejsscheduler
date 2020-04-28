const chai = require("chai");
const expect = chai.expect;
const PriorityQueueDate = require("../routes/priority_queue_date");

describe("Date Priority Queue", () => {
  const queue = new PriorityQueueDate();
  before(() => {
    queue.insert(["21/04/2020", "03:50 PM IST", "how are you?"]);
    queue.insert(["22/04/2020", "03:50 PM IST", "how are you?"]);
    queue.insert(["23/04/2020", "03:50 PM IST", "how are you?"]);
  });

  it.skip("queue is an instance of Priority Queue Date", () => {
    expect(queue instanceof PriorityQueueDate).to.be.true;
  });

  it.skip("return the minimumElement", () => {
    const elem1 = queue.peek();
    expect(elem1[0]).equal("21/04/2020");
    expect(elem1[1]).equal("03:50 PM IST");
  });
});
