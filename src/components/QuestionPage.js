import React, { Component} from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {
    render() {
        return (
            <div>
                <Question id={'6ni6ok3ym7mf1p33lnez'}/>
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
