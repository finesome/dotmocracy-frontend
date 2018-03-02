import React, { Component } from 'react';
import 'App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'

import LoginRegister from 'components/LoginRegister';
import Idea from 'components/Idea';
import Landing from 'scenes/Landing';
import NotFound from 'scenes/NotFound';
import Dashboard from 'scenes/Dashboard';
import { connect } from 'react-redux';


export default class App extends Component {
    render() {
        return (
            <div>
                <LoginRegister/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Route exact path="/idea" component={Idea}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}