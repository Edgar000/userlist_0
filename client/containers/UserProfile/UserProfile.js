import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../actions/actions';

class UserProfile extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.user);
    }

    render() {
        const user = this.props.user;

        return (
            <div>
                {user.avatar_url}
                {user.name}
                {user.followers}
                {user.following}
                {user.created_at}
                {user.company}
                {user.email}
                {user.location}
                {user.blog}
                {user.bio}
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
