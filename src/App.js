import React, { Component } from 'react';
import 'App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import LoginRegister from 'components/LoginRegister';
//import Header from "components/Header";
//import SideMenu from "components/SideMenu";
import Landing from "scenes/Landing";
import NotFound from "scenes/NotFound";
import Dashboard from "scenes/Dashboard";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/login" component={LoginRegister}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        );
    }
}