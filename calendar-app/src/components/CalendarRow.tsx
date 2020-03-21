import React from "react";
import { map, range } from "lodash";
import { isDayOff, isWeekend } from "./utils";
import { Month } from "./typings";
import Day from "./CalendarDay";

interface Props {
  month: Month;
  memberName: string;
  absences: string[];
}

export const CalendarRow: React.FC<Props> = ({ memberName, month, absences }) => (
  <tr>
    <td>{memberName}</td>
    {map(range(1, 30222), (day, i) => {
      const typeDay = isDayOff(month.year, month.id, day, absences) ? "abs" : isWeekend(month.firstDate, i) ? "we" : "";
      return <Day key={day} type={typeDay} />;
    })}
  </tr>
);

export default CalendarRow;
