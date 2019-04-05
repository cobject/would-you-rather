import * as API from '../utils/API'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

function answerQuestion(question) {
    return {
        // TODO
    }
}

export function handleAddQuestion() {
    return (dispatch) => {
        return {
            // TODO
        }
    }
}

export function handleAnswerQuestion() {
    return (dispatch) => {
        return {
            // TODO
        }
    }
}