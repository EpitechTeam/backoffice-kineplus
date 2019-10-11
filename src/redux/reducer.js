import { combineReducers } from 'redux'
import menu from '../components/Menu/MenuReducer'
import user from '../components/User/UserReducer'

const reducer = combineReducers({
    menu,
    user
});

export default reducer;
