import { history } from './history'

const initialState = {
    path: ''
};

const routesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REDIRECT': {
            state = {...state, path: action.payload};
            history.push(action.payload);
            break;
        }
        default: return state;
    }
    return state;
};

export default routesReducer;
