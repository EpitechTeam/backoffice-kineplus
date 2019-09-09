import {redirect} from "../Routes/RoutesAction";

export function checkLogin(email, password) {
    return true;
}

export function logoutUser() {
    return function(dispatch) {
        dispatch(authenticateUser(false));
        dispatch(redirect('/login'));
    }
}

export function authenticateUser(authenticated) {
    return { type: 'AUTHENTICATE', payload: authenticated }
}
