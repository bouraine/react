import React from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarDayHeader from "./CalendarDayHeader";
import CalendarRow from "./CalendarRow";
import { Month, TeamMember } from "./typings";
import { getData, getYearMonths } from "./utils";
import { findIndex, map } from "lodash";

export interface Props {
  year: number;
}

const Calendar: React.FC<Props> = ({ year }) => {
  const [teamMembers, setTeamMembers] = React.useState<TeamMember[]>([]);
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

  React.useEffect(() => {
    getData().then(resp => {
      setTeamMembers(resp);
    });
  }, []);

  return (
    <table className="table table-striped table-bordered tab-content table-responsive-lg">
      <CalendarHeader handleOnNext={handleOnNext} handleOnPrevious={handleOnPrevious} month={currentMonth.name} />
      <CalendarDayHeader nbDays={currentMonth.nbDays} />
      {map(teamMembers, member => (
        <CalendarRow month={currentMonth} memberName={member.name} absences={member.absences} />
      ))}
    </table>
  );
};

export default Calendar;
