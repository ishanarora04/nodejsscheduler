function date_time_format_check(date, time) {
  const date_regex = /[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/;
  const time_regex = /^([01]\d|2[0-3]):([0-5]\d)$/  ;
  return date && date_regex.test(date) && time && time_regex.test(time);
}

exports.date_time_format_check = date_time_format_check;
exports.DDMMYYYYHHmm = "DD-MM-YYYY HH:mm";