import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        const { optionOne, optionTwo } = this.props.question
        const totalVotes = optionOne.votes.length + optionTwo.votes.length

        return (
            <div className='result'>
                <div className='center'>
                    <h3>Asked by {this.props.creater}</h3>
                </div>
                <img
                    src={this.props.avatarURL}
                    alt={`Avatar of ${this.props.creater}`}
                    className='avatar'/>
                <div className='result-info'>
                    <div>Result</div>
                    <div className='option-one'>
                        <h3>Would you rather {optionOne.text}</h3>
                        <h4>{optionOne.votes.length}/{totalVotes}</h4>
                    </div>
                    <div className='option-two'>
                        <h3>Would you rather {optionTwo.text}</h3>
                        <h4>{optionTwo.votes.length}/{totalVotes}</h4>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users}, props) {
    const { id } = props.match.params
    return {
        users,
        question: questions[id],
        creater: users[questions[id].author].name,
        avatarURL: users[questions[id].author].avatarURL
    }
}

export default connect(mapStateToProps)(Result)