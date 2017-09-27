import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './UserListItem.scss';

export class UserListItem extends Component {
    render() {
        const {user} = this.props;

        return (
            <div className="user-list-item">
                <NavLink to={`/users/${user.login}`} className="user-list-item__avatar">
                    <img src={user.avatar_url} alt={user.login}/>
                </NavLink>

                <div className="user-list-item__info">
                    <NavLink to={`/users/${user.login}`} className="user-list-item__info__login">
                        {user.login}
                    </NavLink>

                    <NavLink to={user.html_url} target="_blank" className="user-list-item__info__url">
                        {user.html_url}
                    </NavLink>
                </div>
            </div>
        );
    }
}
