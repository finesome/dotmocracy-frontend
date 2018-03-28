import React, { Component } from 'react';
import 'App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'

import LoginRegister from 'components/LoginRegister';
import Idea from 'scenes/Decision/components/Idea';
import Landing from 'scenes/Landing';
import NotFound from 'scenes/NotFound';
import Dashboard from 'scenes/Dashboard';
import Decision from 'scenes/Decision';
import { connect } from 'react-redux';



export default connect (
    store => ({
        isAuthenticated: store.user.user !== null,
    })
) (class App extends Component {
    render() {
        const redirect = <Redirect to={{path: "/"}}/>

        if (this.props.isAuthenticated) {
            return (
                <div>
                    {/* <Toaster /> */}
                    <LoginRegister />
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            {/* <Route exact path="/" component={Landing}/> */}
                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </div>
            );
        } else {
            return (
                <div>
                    {/* <Toaster /> */}
                    <LoginRegister />
                    <Router>
                        <Switch>
                            <Route path="/dashboard" component={Dashboard}/>
                            <Route exact path="/" component={Landing}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </div>
            );
        }
    }
})