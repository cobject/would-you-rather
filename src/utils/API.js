import {
  _getInitialData,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA'

export function getInitialData () {
    return _getInitialData ()
  }

export function saveQuestion (question) {
  return _saveQuestion (question)
}
  
export function saveQuestionAnswer ({ authedUser, qid, answer }) {
    return _saveQuestionAnswer ({ authedUser, qid, answer })
}