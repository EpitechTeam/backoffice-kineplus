import {checkLogin, authenticateUser} from "../User/UserAction";

export function login(email, password) {
    return function(dispatch) {
        if (checkLogin(email, password))
            dispatch(authenticateUser());
    }
}
