const google = require("googleapis").google;
const utilities = require("../utility/utility");
const credentials = require("../config/credentials.json");
const moment = require("moment");
const fs = require("fs");

const scopes = [
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/spreadsheets.readonly",
];

const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  scopes
);

const sheets = google.sheets({ version: "v4", auth });

async function readGoogleSheet(sheet_id, range) {
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheet_id,
      range: range,
    });

    const schedule = [];

    const current_date = new Date();
    if (res && res.data && res.data.values) {
      res.data.values.splice(0, 1);
      for (let elem of res.data.values) {
        if (utilities.date_time_format_check(elem[0], elem[1])) {
          let date_now = elem[0] + " " + elem[1];
          date_now = moment(date_now, utilities.DDMMYYYYHHmm);
          if (date_now > current_date) {
            schedule.push(elem);
          }
        }
      }
    }

    return schedule;
  } catch (e) {
    return e;
  }
}

exports.readGoogleSheet = readGoogleSheet;
