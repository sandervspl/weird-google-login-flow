const MONTHS = [
  'Januari',
  'Februari',
  'Maart',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Augustus',
  'September',
  'Oktober',
  'November',
  'December',
];

const WEEKDAYS = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const WEEKDAYS_SHORT = WEEKDAYS.map((weekday) => weekday.substring(0, 1));

export const translations = {
  months: MONTHS,
  weekdays: WEEKDAYS,
  weekdaysShort: WEEKDAYS_SHORT,
};
