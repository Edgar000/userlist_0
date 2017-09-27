import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './UserListItem.scss';

export class UserListItem extends Component {
    render() {
        const {user, page} = this.props;

        return (
            <div>
                <NavLink to={'/' + page + '/' + user.login}>
                    <img src={user.avatar_url} alt={user.login}/>
                    {user.login}
                    {user.html_url}
                </NavLink>
            </div>
        );
    }
}
