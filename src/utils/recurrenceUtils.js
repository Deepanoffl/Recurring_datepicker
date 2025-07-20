import {
  addDays,
  addWeeks,
  addMonths,
  addYears,
  format,
  getMonth,
  getYear,
  lastDayOfMonth,
} from "date-fns";

const weekdayMap = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

const ordinalMap = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
};

const getNthWeekdayOfMonth = (year, month, weekday, nth) => {
  let date = new Date(year, month, 1);

  let count = 0;

  while (date.getMonth() === month) {
    if (date.getDay() === weekday) {
      count++;

      if (count === nth) {
        return date;
      }
    }

    date = addDays(date, 1);
  }

  return null;
};

const getLastWeekdayOfMonth = (year, month, weekday) => {
  let date = lastDayOfMonth(new Date(year, month));

  while (date.getDay() !== weekday) {
    date = addDays(date, -1);
  }

  return date;
};

export const generateRecurringDates = ({
  frequency,
  interval,
  startDate,
  endDate,
  customPattern,
}) => {
  if (!startDate) return [];

  const result = [];

  const start = new Date(startDate);

  const end = endDate ? new Date(endDate) : addYears(start, 1);

  if (customPattern?.toLowerCase().includes("every month")) {
    const words = customPattern.toLowerCase().split(" ");

    const ordinal = ordinalMap[words[1]];

    const day = weekdayMap[words[2]];

    const isLast = customPattern.toLowerCase().includes("last");

    let current = new Date(start);

    while (current <= end) {
      const year = getYear(current);

      const month = getMonth(current);

      let recurringDate = null;
      if (isLast) {
        recurringDate = getLastWeekdayOfMonth(year, month, day);
      } else {
        recurringDate = getNthWeekdayOfMonth(year, month, day, ordinal);
      }

      if (recurringDate && recurringDate >= start && recurringDate <= end) {
        result.push(format(recurringDate, "dd-MM-yyyy - EEEE"));
      }

      current = addMonths(current, 1);
    }

    return result;
  }

  // Default logic if no customPattern is used

  let current = new Date(start);

  while (current <= end) {
    result.push(format(current, "dd-MM-yyyy - EEEE"));
    switch (frequency) {
      case "daily":
        current = addDays(current, interval);
        break;
      case "weekly":
        current = addWeeks(current, interval);
        break;
      case "monthly":
        current = addMonths(current, interval);
        break;
      case "yearly":
        current = addYears(current, interval);
        break;
    }
  }

  return result;
};
