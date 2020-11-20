 
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header, Login, WritingRoom } from 'Pages';
class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={ Header }/>
                <Route path="/login" component={ Login }/>
                <Route path="/writingroom" component={ WritingRoom }/>
            </div>
        );
    }
}

export default App;