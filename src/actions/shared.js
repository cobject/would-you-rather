import * as API from '../utils/API'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { logIn } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = '"johndoe"'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return API._getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
                dispatch(logIn(AUTHED_ID))
                dispatch(hideLoading())    
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