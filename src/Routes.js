import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/";
import WritingRoom from "./Pages/WritingRoom/";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
			//=> Main컴포넌트와 연결
          <Route exact path="/writingroom" component={WritingRoom} />
            //=> WritingRoom컴포넌트와 연결
        </Switch>
      </Router>
    );
  }
}