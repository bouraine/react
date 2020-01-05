import React from "react";
import { map, range } from "lodash";

export interface Props {
  nbDays: number;
}

const CalendarDayHeader: React.FC<Props> = ({ nbDays }) => {
  return (
    <tr>
      <th />
      {map(range(0, 31), day => (
        <th key={day} scope={`col ${day < nbDays ? "d-none" : ""}`}>
          {day + 1}
        </th>
      ))}
    </tr>
  );
};

export default CalendarDayHeader;
