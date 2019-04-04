import { RECEIVE_USERS } from '../actions/users'

export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                // TODO
            }
        default:
            return state;
    }
}