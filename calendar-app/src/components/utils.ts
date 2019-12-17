import { range, includes } from "lodash";
import {listMonthNames, Month, TeamMember} from "./typings";

export const getYearMonths = (year: number): Month[] =>
  range(0, 12).reduce((acc, curr, i) => {
    const day = new Date(year, i, 1);
    const nbDays = new Date(year, i + 1, 0).getDate();
    return [...acc, { name: listMonthNames[day.getMonth()], firstDate: day.getDay(), nbDays, id: i, year }];
  }, [] as Month[]);

export const isWeekend = (firstDay: number, i: number) => (i + firstDay + 1) % 7 === 0 || (i + firstDay + 1) % 7 === 1;

export const isDayOff = (year: number, month: number, day: number, absences: string[]) => {
  const currentDate = new Date(Date.UTC(year, month, day)).toISOString().split("T")[0];
  return includes(absences, currentDate);
};

export const getData = (): Promise<TeamMember[]> => fetch("./data2.json").then(r => r.json());