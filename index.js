const express = require("express");
const morgan = require("morgan");
const googlesheet = require("./lib/google_sheets");
const utilities = require("./utility/utility");
const config = require('config');

const TwillioClient = require("./lib/twillio");
const client = new TwillioClient(config.get('twillio.account_sid'), config.get('twillio.auth_token'));

const moment = require("moment");

const PriorityQueue = require("./routes/priority_queue_date");

const app = express();
app.use(morgan(":method :url :response-time"));

const port = 3000;
app.get("/", (req, res) => res.send("Hello World!"));

const queue = new PriorityQueue();

/**
 * Will update the priority Queue periodically for fresh events
 */
app.get("/fetchSheet", async (req, res) => {
  const sheetID = config.get('sheet.ID');
  const range = config.get('sheet.range');
  const output = await googlesheet.readGoogleSheet(sheetID, range);
  for (let elem of output) {
    queue.insert(elem);
  }
  res.send("OK");
});

/**
 * Will send a notif/SMS 10 minutes before the event.
 */
app.get("/sendnotif", async (req, res) => {
  const currentDate = new Date();
  const i = 1;
  while (i > 0) {
    elem = queue.peek();
    const elemDateTime = moment(
      elem[0] + " " + elem[1],
      utilities.DDMMYYYYHHmm
    );
    const timeDiff = moment.duration(elemDateTime.diff(currentDate));
    const timeInMinutes = timeDiff.asMinutes();
    if (timeInMinutes <= 10) {
      queue.get();
      await client.send_sms(`You have an event in ${parseInt(timeInMinutes)} minutes.${elem[2]}`);
      continue;
    }
    break;
  }
  res.send("OK");
});

app.listen(port, () => console.log(`app http://localhost:${port}`));
