import * as API from '../utils/API'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { logIn } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

// const AUTHED_ID = 'johndoe'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return API.getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
                dispatch(hideLoading()) 
            })
    }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
    return (dispatch) => {
        return API.saveQuestionAnswer({ authedUser, qid, answer })
            .then(() => {
                dispatch(handleInitialData())
            })
            .catch(() => {
                console.log('error')
            })
    }
}