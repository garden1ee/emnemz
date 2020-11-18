import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main, Login, WritingRoom } from 'Pages';
class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={ Main }/>
                <Route path="/login" component={ Login }/>
                <Route path="/writingroom" component={ WritingRoom }/>
            </div>
        );
    }
}

export default App;