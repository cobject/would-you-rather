import React, { Component} from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    handleViewPoll = (e) => {
        e.preventDefault()
        // TODO: redirect
    }

    render() {
        return (
            <div>
                <h1>{this.props.question.author}</h1>
                <div>
                    <div>...would you...</div>
                    <button onClick={this.handleViewPoll}>View Poll</button>
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
