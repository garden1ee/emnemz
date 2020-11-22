import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Login, WritingRoom, Vote } from 'Pages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
<<<<<<< HEAD
          <Route path="/Vote" component={ Vote }/>
          <Route path="/writingroom" component={ WritingRoom }/>
=======
          <Route path="/writingroom/:id" component={ WritingRoom }/>
>>>>>>> origin/test
          <Route path="/main" component={ Header }/>
          <Route path="/" component={ Login }/>
         
        </Switch>
      </div>
    );
  }
}

export default App;