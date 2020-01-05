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
      <th colSpan={32} className="text-wrap">
        <span onClick={handleOnPrevious}>
          <NavigateBefore className="pointer" />
        </span>
        <span className="mx-2" style={{ minWidth: "200px" }}>
          {month}
        </span>
        <span onClick={handleOnNext} className="pointer">
          <NavigateNext />
        </span>
      </th>
    </tr>
  );
};

export default CalendarHeader;
