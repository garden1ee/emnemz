import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Login, ProfilePage, WritingRoom} from 'Pages';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/writingroom" component={ WritingRoom }/>
          <Route path="/main" component={ Header }/>
          <Route path="/" component={ Login }/>
        </Switch>
      </div>
    );
  }
}

export default App;