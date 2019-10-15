import { combineReducers } from 'redux'
import menu from '../components/Menu/MenuReducer'
import user from '../components/User/UserReducer'
import login from '../components/Login/LoginReducer'
import recovery from '../components/Recovery/RecoveryReducer'

const reducer = combineReducers({
    menu,
    user,
    login,
    recovery
});

export default reducer;
