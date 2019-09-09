import { history } from './history'

const initialState = {
    path: ''
};

const routesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REDIRECT': {
            history.push();
            state = {...state, path: action.payload};
            break;
        }
        default: return state;
    }
    return state;
};

export default routesReducer;
