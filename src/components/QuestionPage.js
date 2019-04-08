import React, { Component} from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {
    render() {
        return (
            <div>
                {Object.keys(this.props.questions).map((key, index) => (
                    <Question id={this.props.questions[key].id}/>
                ))}
                <hr />
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
