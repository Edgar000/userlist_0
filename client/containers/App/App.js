import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import UserList from '../UserList/UserList';
import UserProfile from '../UserProfile/UserProfile';

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/:page"  component={UserList}/>
                    <Route exact path="/:page/:user" component={UserProfile}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
