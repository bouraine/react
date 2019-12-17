import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Calendar from "./components/Calendar";

const App: React.FC = () => {
  return (
    <div className="App container-fluid mt-5">
      <header className="App-header"> </header>
      <Calendar year={2020} />
    </div>
  );
};

export default App;
