import React, { Component} from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'

class Answer extends Component {
    state = {
        answer: 'optionOne'
    }

    handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.props)
        const authedUser = this.props.authedUser;
        const qid = this.props.id
        const answer = 'optionOne'
        this.props.dispatch(handleSaveQuestionAnswer(
            authedUser,
            qid,
            answer
        ))

        // TODO; redirect
    }

    render() {
        const { question, optionOne, optionTwo } = this.props

        return (
            <div>
                <h3>{question.author} asked:</h3>
                <div>
                    <div>avatar</div>
                    <div>
                        <h3 className='center'>Would you rather...</h3>
                        <form className='new-tweet' onChange={this.handleChange}>
                            <input type='radio' value={'optionOne'} checked={this.state.answer}/>{optionOne}
                            <input type='radio' value={'optionTwo'} />{optionTwo}
                            <button className='btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}, props) {
    const { id } = props.match.params
    return {
        question: questions[id],
        optionOne: questions[id].optionOne.text,
        optionTwo: questions[id].optionTwo.text,
        authedUser
    }
}

export default connect(mapStateToProps)(Answer)
