export const listMonthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "Mai",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Déc"
];

export interface TeamMember {
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
