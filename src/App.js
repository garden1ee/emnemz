import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Login, EnterWritingRoom } from 'Pages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/writingroom/:id" component={ EnterWritingRoom }/>
          <Route path="/main" component={ Header }/>
          <Route path="/" component={ Login }/>
        </Switch>
      </div>
    );
  }
}

export default App;