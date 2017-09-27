import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../../actions/actions';
import './UserProfile.scss';

class UserProfile extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.user);
    }

    render() {
        const {user, history} = this.props;

        return (
            <div className="user-profile">
                <a onClick={history.goBack} className="user-profile__nav">
                    <span>back to list</span>
                    <i className="fa fa-th-list"/>
                </a>

                <div className="user-profile__info">
                    <div className="user-profile__info__avatar">
                        <img src={user.avatar_url} alt={user.login}/>
                    </div>

                    <div className="user-profile__info__contacts">
                        <div>
                            {user.name}
                        </div>

                        <div>
                            {user.location}
                        </div>

                        <div>
                            {user.email}
                        </div>

                        <div>
                            {user.company}
                        </div>
                    </div>
                </div>

                <div className="user-profile__bio">
                    <div>
                        {user.bio}
                    </div>

                    {user.blog ?
                        <NavLink to={user.blog} target="_blank" className="user-profile__bio__url">
                            {user.blog}
                        </NavLink>
                        :
                        null
                    }
                </div>

                <div className="user-profile__details">
                    <div>
                        followers: {user.followers} users
                    </div>

                    <div>
                        following: {user.following} users
                    </div>

                    <div>
                        profile created: {user.created_at}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => {
    return {
        user
    };
};

export default connect(mapStateToProps, {
    getUser
})(UserProfile);
