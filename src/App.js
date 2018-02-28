import React, { Component } from 'react';
import './App.css';

import LoginRegister from './components/LoginRegister';
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <SideMenu/>
                <LoginRegister/>
            </div>
        );
    }
}