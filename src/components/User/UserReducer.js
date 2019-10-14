function sessionManager() {
    return (sessionStorage.getItem("rememberMe") === "true");
}

const initialState = {
    login: 'mcriel',
    email: 'monty.criel@epitech.eu',
    authenticated: sessionManager()
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHENTICATE': {
            if (action.payload === true)
                sessionStorage.setItem("rememberMe", "true");
            else
                sessionStorage.removeItem("rememberMe");
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
