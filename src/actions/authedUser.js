export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export function logIn(id) {
    return {
        type: LOG_IN,
        id
    }
}

function logOut(id) {
    return {
        type: LOG_OUT
    }
}

