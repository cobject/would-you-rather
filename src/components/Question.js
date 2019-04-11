import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component {
    render() {
        return (
            <div className='question'>
                <img
                    src={this.props.avatarURL}
                    alt={`Avatar of ${this.props.question.author}`}
                    className='avatar'
                />
                <div className='question-info center'>
                    <h1>{this.props.question.author}</h1>
                
                    <div>...would you...</div>
                    <Link to={`/questions/${this.props.id}`} category={this.props.category}>
                        <button>View Poll</button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, {id}) {
    return {
        avatarURL: users[questions[id].author].avatarURL,
        question: questions[id],
        isAnswered: Object.keys(users[authedUser].answers).filter((key) => (key === id)).length > 0
    }
}

export default connect(mapStateToProps)(Question)
