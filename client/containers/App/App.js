import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {UserList} from '../UserList/UserList';

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"  component={UserList}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
