export const getWeekdayShortName = (weekdayName = "") => {
  return ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].includes(weekdayName)
    ? weekdayName
    : weekdayName.slice(0, 3).toUpperCase();
};
