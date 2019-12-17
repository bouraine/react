import React from "react";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

export interface Props {
  handleOnPrevious: () => void;
  handleOnNext: () => void;
  month: string;
}

const CalendarHeader: React.FC<Props> = ({ month, handleOnPrevious, handleOnNext }) => {
  return (
    <tr>
      <th onClick={handleOnPrevious} className="pointer">
        <NavigateBefore />
      </th>
      <th colSpan={30} className="font-weight-bold">
        {month}
      </th>
      <th className="pointer" onClick={handleOnNext}>
        <NavigateNext />
      </th>
    </tr>
  );
};

export default CalendarHeader;
