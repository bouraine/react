import * as React from "react";
import {
  Icon,
  Left,
  Main,
  ListItem,
  Right,
  Wrapper,
  ListItemText,
  ShowIf
} from "./app.css";
import * as ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  const [show, setId] = React.useState(false);
  return (
    <Wrapper>
      <Left show={show}>
        <ShowIf show={show}>
          <div className="mt-3 h4 ml-3 d-md-block">Header</div>
        </ShowIf>
        <ul className="mt-2 list-unstyled list-group">
          <ListItem>
            <Icon name="ad" />
            <ListItemText show={show}>Introduction</ListItemText>
          </ListItem>
          <ListItem>
            <Icon name="assistive-listening-systems" />
            <ListItemText show={show}>The css Prod</ListItemText>
          </ListItem>
          <ListItem>
            <Icon name="list" />
            <ListItemText show={show}>Install</ListItemText>
          </ListItem>
        </ul>
      </Left>
      <Main onClick={() => setId(!show)}>Main</Main>
      <Right>Sidebar</Right>
    </Wrapper>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("app"));
