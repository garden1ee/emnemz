import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Login, WritingRoom , Vote} from 'Pages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/writingroom" component={ WritingRoom }/>
          <Route path="/main" component={ Header }/>
          <Route path="/" component={ Login }/>
          <Route path="/Vote" component={ Vote }/>
        </Switch>
      </div>
    );
  }
}

export default App;