import * as React from "react";
import {Wrapper} from "./app.css";

export const App = () => {
    return (
        <Wrapper>
            <div className="d-flex flex-row w-100 h-100">
                <div className="border bg-success left">Menu</div>
                <div className="border bg-info flex-grow-1">Main</div>
                <div className="border bg-danger col-12 col-md-4">sidebar</div>
            </div>
        </Wrapper>
    );
};

export default App;

React.render(React.createElement(App), document.getElementById("app"));