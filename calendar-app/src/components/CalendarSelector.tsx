import React from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarDayHeader from "./CalendarDayHeader";
import CalendarRow from "./CalendarRow";
import { Absences, Month } from "./typings";
import { getYearMonths } from "./utils";
import { findIndex, map } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbsences } from "../app/app.reducer";
import { AppState } from "../app/configureStore";

export interface Props {
  year: number;
}

const CalendarSelector: React.FC<Props> = ({ year }) => {
  const [currentMonth, setCurrentMonth] = React.useState<Month>(getYearMonths(year)[0]);
  const [yearMonths, _] = React.useState(getYearMonths(year));

  const handleOnNext = () => {
    const index = findIndex(yearMonths, { name: currentMonth.name });
    const nextIndex = (index + 1) % 11;
    setCurrentMonth(yearMonths[nextIndex]);
  };

  const handleOnPrevious = () => {
    const index = findIndex(yearMonths, { name: currentMonth.name });
    const nextIndex = (index + 11) % 12;
    setCurrentMonth(yearMonths[nextIndex]);
  };

  const dispatch = useDispatch();
  const absences = useSelector<AppState, Absences[]>(state => state.absences.absences);

  React.useEffect(() => {
    dispatch(fetchAbsences.started(""));
  }, []);

  return (
    <table className="table table-bordered tab-content table-responsive-lg">
      <thead>
        <CalendarHeader handleOnNext={handleOnNext} handleOnPrevious={handleOnPrevious} month={currentMonth.name} />
        <CalendarDayHeader nbDays={currentMonth.nbDays} />
      </thead>
      <tbody>
        {map(absences, member => (
          <CalendarRow key={member.name} month={currentMonth} memberName={member.name} absences={member.absences} />
        ))}
      </tbody>
    </table>
  );
};

export default CalendarSelector;
