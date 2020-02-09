import {calendar} from "./time.js";
import {utcFormat} from "d3-time-format";
import {utcYear, utcMonth, utcWeek, utcDay, utcHour, utcMinute, utcSecond, utcMillisecond} from "d3-time";
import {initRange} from "./init.js";
import NanoDate from 'nano-date';

export default function() {
  return initRange.apply(calendar(utcYear, utcMonth, utcWeek, utcDay, utcHour, utcMinute, utcSecond, utcMillisecond, utcFormat).domain([NanoDate(Date.UTC(2000, 0, 1)), NanoDate(Date.UTC(2000, 0, 2))]), arguments);
}
