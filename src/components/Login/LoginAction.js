import {checkLogin, authenticateUser} from "../User/UserAction";
import {redirect} from "../Routes/RoutesAction";

export function login(email, password) {
    return function(dispatch) {
        if (checkLogin(email, password)) {
            dispatch(authenticateUser(true));
            dispatch(redirect('/home'));
        }
    }
}
