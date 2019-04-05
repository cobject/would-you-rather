import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        console.log(this.props)
        const { optionOne, optionTwo } = this.props.question
        const totalVotes = optionOne.votes.length + optionTwo.votes.length

        return (
            <div>
                <h3>Asked by {this.props.creater}</h3>
                <img src={this.props.question.avatar} alt='avatar'></img>
                <div className='result'>Result</div>
                <div className='option-one'>
                    <h3>Would you rather {optionOne.text}</h3>
                    <h4>{optionOne.votes.length}/{totalVotes}</h4>
                </div>
                <div className='option-two'>
                    <h3>Would you rather {optionTwo.text}</h3>
                    <h4>{optionTwo.votes.length}/{totalVotes}</h4>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users}, {id}) {
    return {
        question: questions[id],
        creater: users[questions[id].author].name
    }
}

export default connect(mapStateToProps)(Result)