const user = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_RECEIVE':
            return action.user;
        default:
            return state;
    }
};

export default user;
