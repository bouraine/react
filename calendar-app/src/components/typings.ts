export const listMonthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "Mai",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export interface Absences {
  name: string;
  absences: string[];
}

export interface Month {
  name: string;
  id: number;
  firstDate: number;
  year: number;
  nbDays: number;
}
