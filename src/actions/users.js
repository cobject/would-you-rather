export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ASK_QUESTION = 'ASK_QUESTION'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function askQuestion(user, qid) {
    return {
        type: ASK_QUESTION,
        user,
        qid
    }
}