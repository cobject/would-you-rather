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
                    {/* TODO: answer or result */}
                    <Link to={`/question/${this.props.id}`}>
                        <button>View Poll</button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}, {id}) {
    console.log(id)
    return {
        question: questions[id]
    }
}

export default connect(mapStateToProps)(Question)
