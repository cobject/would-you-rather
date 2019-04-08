import React, { Component} from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {
    render() {
        return (
            <div>
                <Question />
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}) {
    return {
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionPage)
