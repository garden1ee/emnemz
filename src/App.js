 
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Login, ProfilePage, WritingRoom } from 'Pages';
class App extends Component {
    render() {
        return (
            <div>
              <Switch>
                <Route path="/login" component={ Login }/>
                <Route path="/profile" component={ ProfilePage }/>
                <Route path="/writingroom" component={ WritingRoom }/>
                <Route path="/" component={ Header }/>
              </Switch>
            </div>
        );
    }
}

export default App;