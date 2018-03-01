import React, { Component } from 'react';
import 'App.css';

import LoginRegister from 'components/LoginRegister';
import Header from "components/Header";
import SideMenu from "components/SideMenu";
import Landing from "scenes/Landing";
import NotFound from "scenes/NotFound";
import Dashboard from "scenes/Dashboard";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Dashboard/>
                <LoginRegister/>
                <Landing/>
                <NotFound/>
            </div>
        );
    }
}