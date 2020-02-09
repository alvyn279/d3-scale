import NanoDate from 'nano-date'

exports.local = function(year, month, day, hours, minutes, seconds, milliseconds) {
  if (year == null) year = 0;
  if (month == null) month = 0;
  if (day == null) day = 1;
  if (hours == null) hours = 0;
  if (minutes == null) minutes = 0;
  if (seconds == null) seconds = 0;
  if (milliseconds == null) milliseconds = 0;
  if (0 <= year && year < 100) {
    var date = new NanoDate(-1, month, day, hours, minutes, seconds, milliseconds);
    date.setFullYear(year);
    return date;
  }
  return new NanoDate(year, month, day, hours, minutes, seconds, milliseconds);
};

exports.utc = function(year, month, day, hours, minutes, seconds, milliseconds) {
  if (year == null) year = 0;
  if (month == null) month = 0;
  if (day == null) day = 1;
  if (hours == null) hours = 0;
  if (minutes == null) minutes = 0;
  if (seconds == null) seconds = 0;
  if (milliseconds == null) milliseconds = 0;
  if (0 <= year && year < 100) {
    var date = new NanoDate(Date.UTC(-1, month, day, hours, minutes, seconds, milliseconds));
    date.setUTCFullYear(year);
    return date;
  }
  return new NanoDate(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
};
