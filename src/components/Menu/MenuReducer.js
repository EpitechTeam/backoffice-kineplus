const initialState = {
    open: false
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_MENU_DRAWER': {
            state = {...state, open: action.payload};
            break;
        }
        default: return state;
    }
    return state;
};

export default menuReducer;
