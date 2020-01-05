import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CalendarSelector from "./components/CalendarSelector";
import { Provider } from "react-redux";
import { configureStore } from "./app/configureStore";

const appStore = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={appStore}>
      <div className="App container-fluid mt-5">
        <CalendarSelector year={2020} />
      </div>
    </Provider>
  );
};

export default App;
