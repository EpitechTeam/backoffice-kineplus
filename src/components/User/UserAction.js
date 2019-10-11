
export function checkLogin(email, password) {
    return true;
}

export function logoutUser() {
    return function(dispatch) {
        dispatch(authenticateUser(false));
        //dispatch(redirect('/login'));
        // new history push
    }
}

export function authenticateUser(authenticated) {
    return { type: 'AUTHENTICATE', payload: authenticated }
}
