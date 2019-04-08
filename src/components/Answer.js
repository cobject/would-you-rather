import React, { Component} from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'

class Answer extends Component {
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
        return (
            <div>
                <h3>{this.props.question.author} asked:</h3>
                <div>
                    <div>avatar</div>
                    <div>
                        <h3>Would you rather...</h3>
                        <button onClick={this.handleSubmit}>submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}, {id}) {
    return {
        question: questions[id],
        authedUser
    }
}

export default connect(mapStateToProps)(Answer)
