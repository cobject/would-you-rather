import * as API from '../utils/API'
import { receiveQuestions, addQuestion } from './questions'
import { receiveUsers, askQuestion } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

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
                console.log('success')
                dispatch(handleInitialData())
            })
            .catch(() => {
                console.log('error')
            })
    }
}

export function handleAddQuestion(question, asker) {
    return (dispatch) => {
        return API.saveQuestion(question)
                .then((formattedQuestion) => {
                    dispatch(addQuestion(formattedQuestion, asker))
                    dispatch(askQuestion(asker, formattedQuestion.id))
                })
    }
}