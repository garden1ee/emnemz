import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import { Header, Login, ProfilePage, WritingRoom, PublishAgreeModal } from 'Pages';
=======
import { Header, Login, WritingRoom } from 'Pages';
>>>>>>> 94f6000704fca1787dc2e70945c389533be1420a
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