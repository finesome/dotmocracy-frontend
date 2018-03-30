import React, { Component } from 'react';
import 'App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

import LoginRegister from 'components/LoginRegister';
import Landing from 'scenes/Landing';
import NotFound from 'scenes/NotFound';
import Dashboard from 'scenes/Dashboard';
import Decision from 'scenes/Decision';
import AddBoard from 'scenes/Add Board';
import { connect } from 'react-redux';

export default connect (
    store => ({
        isAuthenticated: store.user.user !== null
    })
) (class App extends Component {
    
    render() {
        const redirect = <Redirect to={{path: "/"}}/>;
        console.log("isAuthenticated:", this.props.isAuthenticated);

        if (!this.props.isAuthenticated) {
            return (
                <div>
                    <LoginRegister />
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Landing}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </div>
            );
        } else {
            return (
                <div>
                    <LoginRegister />
                    <Router>
                        <Switch>
                            <Route path="/dashboard" component={Dashboard}/>
                            <Route exact path="/addboard" component={AddBoard}/>
                            <Route exact path="/" component={Landing} />
                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </div>
            );
        }
    }
})