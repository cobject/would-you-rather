import React, { Component} from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {
    render() {
        return (
            <div>
                {this.props.questions.map((question) => (
                    <Question id={question.id} key={question.id}/>
                ))}
                <hr />
            </div>
        )
    }
}

function mapStateToProps({questions}) {
    return {
        questions: Object.keys(questions).map((key) => questions[key])
    }
}

export default connect(mapStateToProps)(QuestionPage)
