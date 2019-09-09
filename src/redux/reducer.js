import { combineReducers } from 'redux'
import menu from '../components/Menu/MenuReducer'
import routes from '../components/Routes/RoutesReducer'
import user from '../components/User/UserReducer'

const reducer = combineReducers({
    menu,
    routes,
    user
});

export default reducer;
