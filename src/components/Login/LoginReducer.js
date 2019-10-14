const initialState = {
    email: "",
    password: "",
    showPassword: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_PASSWORD_VISIBILITY': {
            state = {...state, showPassword: action.payload};
            break;
        }
        case 'UPDATE_CREDENTIAL': {
            console.log(action.payload);
            state[action.payload.type] = action.payload.credential;
            state = {...state};
            break;
        }
        default: return state;
    }
    return state;
};

export default loginReducer;
