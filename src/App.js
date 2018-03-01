import React, { Component } from 'react';
import 'App.css';

import LoginRegister from 'components/LoginRegister';
import Landing from "scenes/Landing";
import NotFound from "scenes/NotFound";
import Dashboard from "scenes/Dashboard";
import IdeaBox from "components/Idea";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Dashboard/>
                {/*<LoginRegister/>*/}
                {/*<Landing/>*/}
                {/*<NotFound/>*/}
                <IdeaBox/>
            </div>
        );
    }
}