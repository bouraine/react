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
    <td className="text-nowrap">{memberName}</td>
    {map(range(1, 32), (day, i) => {
      const typeDay = isDayOff(month.year, month.id, day, absences) ? "abs" : isWeekend(month.firstDate, i) ? "we" : "";
      return <Day key={i} type={typeDay} />;
    })}
  </tr>
);

export default CalendarRow;
