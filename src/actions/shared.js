import * as API from '../utils/API'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
// import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
    return (dispatch) => {
        return API._getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
            })
    }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
    return (dispatch) => {
        return API._saveQuestionAnswer({ authedUser, qid, answer })
            .then(() => {
                // TODO
            })
            .catch(() => {
                console.log('error')
            })
    }
}