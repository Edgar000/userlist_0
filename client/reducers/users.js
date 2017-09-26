const users = (state = [], action) => {
    switch (action.type) {
        case 'GET_USERS_RECEIVE':
            return action.users;
        default:
            return state;
    }
};

export default users;
