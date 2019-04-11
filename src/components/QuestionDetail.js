import React, { Component } from 'react'
import Result from './Result'
import Answer from './Answer'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class QuestionDetail extends Component {
    render() {
        const { answered  } = this.props

        if(!this.props.valid) {
            return (
                <Redirect to='/404' />
            )
        }
        return (
            <div>
                {answered
                    ? <Result id={this.props.match.params.id}/>
                    : <Answer id={this.props.match.params.id}/>
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    const { id } = props.match.params
    return {
        authedUser,
        users,
        id: id,
        answered: Object.keys(users[authedUser].answers).map((key) => key).includes(id),
        valid: questions[id] !== undefined
    }
}

export default connect(mapStateToProps)(QuestionDetail)