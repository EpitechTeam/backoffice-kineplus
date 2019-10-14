import {checkLogin, authenticateUser} from "../User/UserAction";
import {history} from "../../services/history";

export function login(email, password) {
    return function(dispatch) {
        checkLogin(email, password).then((loginSuccess) => {
            console.log('response API', loginSuccess);
            if (loginSuccess) {
                dispatch(authenticateUser(true));
                history.push("/home");
                window.location.reload();
            }
        })
    }
}

export function togglePasswordVisibility(isVisible) {
    return { type: 'TOGGLE_PASSWORD_VISIBILITY', payload: isVisible }
}

export function updateCredential(type, credential) {
    return { type: 'UPDATE_CREDENTIAL', payload: {type: type, credential: credential} }
}
