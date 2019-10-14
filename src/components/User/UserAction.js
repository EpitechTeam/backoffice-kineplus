export function checkLogin(email, password) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("fake api:");
            if (email === "monty.criel@epitech.eu" && password === "dev" )
                resolve(true);
            else
                resolve(false)
        }, 2000);
    });
}

export function logoutUser() {
    return function(dispatch) {
        return dispatch(authenticateUser(false));
    }
}

export function authenticateUser(authenticated) {
    return { type: 'AUTHENTICATE', payload: authenticated }
}
