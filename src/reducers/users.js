import { RECEIVE_USERS, ASK_QUESTION } from '../actions/users'

export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ASK_QUESTION:
            return {
                ...state,
                [action.user]: {
                    ...state[action.user],
                    questions: [...state[action.user].questions, action.qid]
                }
            }
        default:
            return state;
    }
}