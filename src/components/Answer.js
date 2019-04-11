import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSaveQuestionAnswer } from '../actions/shared'

class Answer extends Component {
    state = {
        answer: 'optionOne',
        toHome: false
    }

    handleOptionChange = (e) => {
        this.setState({
            answer: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const authedUser = this.props.authedUser;
        const { id } = this.props.match.params
        this.props.dispatch(handleSaveQuestionAnswer(
            authedUser,
            id,
            this.state.answer
        ))

        this.setState({
            toHome: true
        })
    }

    render() {
        const { question, optionOne, optionTwo } = this.props

        if(this.state.toHome === true) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div className='answer'>
                <img
                    src={this.props.avatarURL}
                    alt={`Avatar of ${question.author}`}
                    className='avatar'/>
                <div className='answer-info'>
                    <h3>{question.author} asked:</h3>
                    <h3 className='center'>Would you rather...</h3>
                    <form>
                        <input type='radio' value={'optionOne'} 
                            checked={this.state.answer === 'optionOne' ? true : false}
                            onChange={this.handleOptionChange}
                        />{optionOne}
                        <br/>   
                        <input type='radio' value={'optionTwo'} 
                            checked={this.state.answer === 'optionTwo' ? true : false}
                            onChange={this.handleOptionChange}
                        />{optionTwo}
                        <br/>
                        <button className='btn' onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, questions, authedUser}, {id}) {
    return {
        question: questions[id],
        avatarURL: users[questions[id].author].avatarURL,
        optionOne: questions[id].optionOne.text,
        optionTwo: questions[id].optionTwo.text,
        authedUser
    }
}

export default connect(mapStateToProps)(Answer)
