import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { map, range, findIndex } from "lodash";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

interface WorkMonth {
  month: string;
  days: string[];
}

interface Employee {
  name: string;
  months: WorkMonth[];
}

export interface SalariesDTO {
  employees: Employee[];
}

const getSalaries = (): Promise<SalariesDTO> => fetch("./data.json").then(r => r.json());
const listMonth = ["January", "February", "March", "April", "Mai", "June"];

const App: React.FC = () => {
  const [employees, setEmployees] = React.useState<Employee[]>([]);
  const [currentMonth, setCurrentMonth] = React.useState<string>("January");
  React.useEffect(() => {
    getSalaries().then(resp => {
      console.log(resp);
      setEmployees(resp.employees);
    });
  }, []);

  const handleOnNext = () => {
    const index = findIndex(listMonth, x => x === currentMonth);
    const nextIndex = (index + 1) % 5;
    setCurrentMonth(listMonth[nextIndex]);
  };

  const handleOnPrevious = () => {
    const index = findIndex(listMonth, x => x === currentMonth);
    const nextIndex = (index + 4) % 5;
    setCurrentMonth(listMonth[nextIndex]);
  };

  return (
    <div className="App container-fluid mt-5">
      <header className="App-header"> </header>

      <table className="table tab-content table-responsive">
        <tr>
          <td onClick={handleOnPrevious} className="pointer">
            <NavigateBefore />
          </td>
          <td colSpan={30} className="font-weight-bold">
            {currentMonth}
          </td>
          <td className="pointer" onClick={handleOnNext}>
            <NavigateNext />
          </td>
        </tr>
        <tr>
          <th />
          {map(range(1, 32), x => (
            <th scope="col">{x}</th>
          ))}
        </tr>
        {map(employees, employee => (
          <tr>
            <td>{employee.name}</td>
            {map(employee.months.find(x => x.month === currentMonth)?.days, (x, i) => (
              <td>{x}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
