const initialState = {
    login: 'mcriel',
    email: 'monty.criel@epitech.eu',
    authenticated: true
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHENTICATE': {
            state = {...state, authenticated: action.payload};
            break;
        }
        case 'SET_CREDENTIAL': {
            if (!state.hasOwnProperty(action.payload.prop))
                return;
            break;
        }
        default: return state;
    }
    return state;
};

export default userReducer;
