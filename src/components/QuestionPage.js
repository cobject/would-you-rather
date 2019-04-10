import React, { Component} from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {
    state = {
        category: 'unanswered'
    }

    handleOptionChange = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    render() {
        const { questions, answers } = this.props
        const filteredQuestions = questions.filter((q) => {
            return this.state.category === 'unanswered' ? !answers.includes(q.id) : answers.includes(q.id)
        }).sort((a, b) => {
            return b.timestamp - a.timestamp
        })

        return (
            <div>
                <div className='question-option'>
                    <input type='radio' value={'unanswered'} 
                        checked={this.state.category === 'unanswered' ? true : false}
                        onChange={this.handleOptionChange}
                    />Unanswered questions
                    <input type='radio' value={'answered'} 
                        checked={this.state.category === 'answered' ? true : false}
                        onChange={this.handleOptionChange}
                    />Answered questions
                </div>
                {filteredQuestions.map((question) => (
                    <Question id={question.id} category={this.state.category} key={question.id}/>
                ))}
                <hr />
            </div>
        )
    }
}

function mapStateToProps({users, authedUser, questions}) {
    return {
        answers: Object.keys(users[authedUser].answers).map((key) => (key)),
        authedUser,
        questions: Object.keys(questions).map((key) => questions[key])
    }
}

export default connect(mapStateToProps)(QuestionPage)
