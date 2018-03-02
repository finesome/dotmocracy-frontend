import React, { Component } from 'react';
import 'App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Toaster from 'components/Toaster'


import LoginRegister from 'components/LoginRegister';
//import Header from "components/Header";
//import SideMenu from "components/SideMenu";
import Landing from "scenes/Landing";
import NotFound from "scenes/NotFound";
import Dashboard from "scenes/Dashboard";
import {connect} from "react-redux"


export default connect (
    store => ({
        isAuthenticated: store.user.user !== null,
    })
) (class App extends Component {
    render() {

        return (
            <div>
                {/* <Toaster /> */}
                <LoginRegister />
                <Router>
                    <Switch>
                        {
                            (this.props.isAuthenticated) 
                                ? <Route path="/dashboard" component={Dashboard}/>
                                : ""
                        }
                        <Route exact path="/" component={Landing}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </div>
        );
    }
})