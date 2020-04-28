const PriorityQueue = require("../lib/priority_queue").PriorityQueue;
const utility = require("../utility/utility");

const moment = require("moment");

class PriorityQueueDate extends PriorityQueue {
  constructor() {
    super();
  }

  compare(elem1, elem2) {
    if (!(elem1 || elem2 || elem1[0] || elem2[0] || elem1[1] || elem2[1])) {
      return false;
    }
    const date1 = moment(elem1[0] + " " + elem1[1], utility.DDMMYYYYHHmm);
    const date2 = moment(elem2[0] + " " + elem2[1], utility.DDMMYYYYHHmm);
    return date1 < date2;
  }
}

module.exports = PriorityQueueDate;
