export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

function loginUser(id) {
    return {
        type: LOGIN_USER,
        id
    }
}

function logoutUser(id) {
    return {
        type: LOGOUT_USER
    }
}

