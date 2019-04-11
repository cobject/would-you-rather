import React, { Component } from 'react'
import Result from './Result'
import Answer from './Answer'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class QuestionDetail extends Component {
    render() {
        console.log('q', this.props)
        if(!this.props.valid) {
            return (
                <Redirect to='/404' />
            )
        }

        return (
            <div>
                {this.props.category === 'answered'
                    ? <Result id={this.props.match.params.id}/>
                    : <Answer id={this.props.match.params.id}/>
                }
            </div>
        )
    }
}

function mapStateToProps({questions}, props) {
    const { id } = props.match.params
    return {
        id: id,
        valid: questions[id] !== undefined
    }
}

export default connect(mapStateToProps)(QuestionDetail)