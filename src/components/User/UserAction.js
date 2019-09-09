import {redirect} from "../Routes/RoutesAction";

export function checkLogin(email, password) {
    return true;
}

export function logoutUser() {
    return function(dispatch) {
        dispatch(redirect('/login'));
        dispatch(authenticateUser(false));
    }
}

export function authenticateUser(authenticated) {
    return { type: 'AUTHENTICATED', payload: authenticated }
}
