import { combineReducers } from 'redux'
import menu from '../components/Menu/MenuReducer'
import user from '../components/User/UserReducer'
import login from '../components/Login/LoginReducer'

const reducer = combineReducers({
    menu,
    user,
    login
});

export default reducer;
