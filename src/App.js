import React, { Component } from 'react';
import 'App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

import LoginRegister from 'components/LoginRegister';
import AddBoard from 'scenes/AddBoard';
import Dashboard from 'scenes/Dashboard';
import Decision from 'scenes/Decision';
import Landing from 'scenes/Landing';
import NotFound from 'scenes/NotFound';
import Settings from 'scenes/Settings';
import AdminPanel from 'scenes/AdminPanel';

import { connect } from 'react-redux';
import { checkAuth } from 'model';

export default connect(
    store => ({
        isAuthenticated: store.user.user !== null,
        isAdmin: store.user.user !== null && store.user.user.isAdmin
    }),
    {
        checkAuth
    }
)( class App extends Component {

    constructor(props) {
        super(props);
        console.log("--- Check authentication ---");
        this.props.checkAuth();
    }

    render() {
        const redirect = <Redirect to={{ path: "/" }}/>;
        console.log( "isAuthenticated:", this.props.isAuthenticated );

        if ( !this.props.isAuthenticated ) {
            return (
                <div>
                    <LoginRegister/>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Landing}/>
                            <Redirect to="/"/>
                        </Switch>
                    </Router>
                </div>
            );
        } else {
            if ( !this.props.isAdmin ) {
                return (
                    <div>
                        <LoginRegister/>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Landing}/>
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route exact path="/addboard" component={AddBoard}/>
                                <Route exact path="/logout" component={Landing}/>
                                <Route path="/decision" component={Decision}/>
                                <Route exact path="/settings" component={Settings}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </Router>
                    </div>
                );
            } else {
                return (
                    <Router>
                        <Switch>
                            <Route component={AdminPanel}/>
                        </Switch>
                    </Router>
                );
            }
        }
    }
} )