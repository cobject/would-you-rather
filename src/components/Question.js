import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.question.author}</h1>
                
                <div>
                    <div>...would you...</div>
                    {this.props.isAnswered === true
                        ? <Link to={`/question/${this.props.id}`}>
                            <button>View Poll</button>
                          </Link>
                        : <Link to={`/answer/${this.props.id}`}>
                            <button>View Poll</button>
                          </Link>
                    }
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, {id}) {
    return {
        question: questions[id],
        isAnswered: Object.keys(users[authedUser].answers).filter((key) => (key === id)).length > 0
    }
}

export default connect(mapStateToProps)(Question)
