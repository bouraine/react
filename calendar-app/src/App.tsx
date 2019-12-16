import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { map, range, findIndex, find, includes } from "lodash";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

interface TeamMember {
  name: string;
  absences: string[];
}

interface Month {
  name: string;
  id: number;
  firstDate: number;
  nbDays: number;
}

const currentYear = 2020;

const listMonthNames: string[] = [
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

const getData = (): Promise<TeamMember[]> => fetch("./data2.json").then(r => r.json());

const getYearMonths = (year: number): Month[] =>
  range(0, 12).reduce((acc, curr, i) => {
    const day = new Date(year, i, 1);
    const nbDays = new Date(year, i + 1, 0).getDate();
    return [...acc, { name: listMonthNames[day.getMonth()], firstDate: day.getDay(), nbDays, id: i }];
  }, [] as Month[]);

const isWeekend = (firstDay: number, i: number) => (i + firstDay + 1) % 7 === 0 || (i + firstDay + 1) % 7 === 1;

const App: React.FC = () => {
  const [teamMembers, setTeamMembers] = React.useState<TeamMember[]>([]);
  const [currentMonth, setCurrentMonth] = React.useState<Month>(getYearMonths(currentYear)[0]);
  const [yearMonths, _] = React.useState(getYearMonths(currentYear));

  React.useEffect(() => {
    getData().then(resp => {
      setTeamMembers(resp);
    });
  }, []);

  const handleOnNext = () => {
    const index = findIndex(yearMonths, { name: currentMonth.name });
    const nextIndex = (index + 1) % 11;
    console.log(yearMonths);
    setCurrentMonth(yearMonths[nextIndex]);
  };

  const handleOnPrevious = () => {
    const index = findIndex(yearMonths, { name: currentMonth.name });
    const nextIndex = (index + 11) % 12;
    setCurrentMonth(yearMonths[nextIndex]);
  };

  return (
    <div className="App container-fluid mt-5">
      <header className="App-header"> </header>

      <table className="table table-bordered tab-content table-responsive-lg">
        <tr>
          <td onClick={handleOnPrevious} className="pointer">
            <NavigateBefore />
          </td>
          <td colSpan={30} className="font-weight-bold">
            {currentMonth.name}
          </td>
          <td className="pointer" onClick={handleOnNext}>
            <NavigateNext />
          </td>
        </tr>
        <tr>
          <th />
          {map(range(0, currentMonth.nbDays), x => (
            <th scope="col">{x + 1}</th>
          ))}
        </tr>
        {map(teamMembers, member => (
          <tr>
            <td>{member.name}</td>
            {map(range(1, (find(yearMonths, { name: currentMonth.name })?.nbDays || 0) + 1), (x, i) => {
              const currentDate = new Date(Date.UTC(currentYear, currentMonth.id, x)).toISOString().split("T")[0];
              const isOff = includes(member.absences, currentDate);
              return <td>{isWeekend(currentMonth.firstDate, i) ? "w" : isOff ? "x" : ""}</td>;
            })}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
