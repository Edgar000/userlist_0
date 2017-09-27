import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUsers} from '../../actions/actions';
import {UserListItem} from '../../components/UserListItem/UserListItem';
import './UserList.scss';

class UserList extends Component {
    state = {
        page: +this.props.match.params.page,
    };

    getPage = (page) => {
        this.setState({
            page
        });
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.page !== nextProps.match.params.page) {
            this.props.getUsers(nextProps.match.params.page);
        }
    }

    componentDidMount() {
        this.props.getUsers(this.state.page);
    }

    render() {
        const users = this.props.users.map((item) => {
            return (
                <UserListItem user={item} page={this.state.page} key={item.id}/>
            );
        });

        return (
            <div className="user-list">
                <div className="user-list__nav">
                    {this.state.page > 0 ?
                        <NavLink to={'/' + (this.state.page - 1)}
                                 onClick={() => {
                                     this.getPage(this.state.page - 1)
                                 }}
                                 className="user-list__nav__button">
                            <i className="fa fa-toggle-left"/>
                        </NavLink>
                        :
                        null
                    }

                    <div className="user-list__nav__page">
                        {'page ' + this.state.page}
                    </div>

                    <NavLink to={'/' + (this.state.page + 1)}
                             onClick={() => {
                                 this.getPage(this.state.page + 1)
                             }}
                             className="user-list__nav__button">
                        <i className="fa fa-toggle-right"/>
                    </NavLink>
                </div>

                {users}
            </div>
        );
    }
}

const mapStateToProps = ({users}) => {
    return {
        users
    };
};

export default connect(mapStateToProps, {
    getUsers
})(UserList);
