const initialState = {
    email: ""
};

const recoveryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_EMAIL': {
            state = {...state, email: action.payload};
            break;
        }
        default: return state;
    }
    return state;
};

export default recoveryReducer;
