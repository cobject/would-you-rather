import React, { Component} from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.className]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state
        const authedUser = this.props.authedUser

        this.props.dispatch(handleAddQuestion({ 
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        }))
        // TODO: redirect
    }

    render() {
        const { optionOne, optionTwo } = this.state

        return (
            <div>
                <h1>Create New Question</h1>
                <div>
                    <div>complete the question</div>
                    <h3>Would you rather</h3>
                    <form className='new-question' onSubmit={this.handleSubmit}>
                        <textarea className='optionOne' onChange={this.handleChange} value={optionOne} />
                        <textarea className='optionTwo' onChange={this.handleChange} value={optionTwo} />
                        <button
                        className='btn'
                        type='submit'
                        disabled={optionOne === '' || optionTwo === ''}>
                            submit
                    </button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)