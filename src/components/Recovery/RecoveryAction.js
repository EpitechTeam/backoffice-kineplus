export function updateEmail(email) {
    return {type: 'UPDATE_EMAIL', payload: email};
}

function checkEmail(email) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("fake checking email...");
            if (email === "monty.criel@epitech.eu")
                resolve(true);
            else
                resolve(false)
        }, 2000);
    });
}

export function recoverEmail(email) {
    return function(dispatch) {
        checkEmail(email).then((validMail) => {
            console.log('response API', validMail);
            if (validMail) {
                // dispatch(authenticateUser(true));
                // dispatch a snackbar to notify response for either success or failure
            }
        })
    }
}
