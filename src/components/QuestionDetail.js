import React, { Component } from 'react'
import Result from './Result'
import Answer from './Answer'

class QuestionDetail extends Component {
    render() {
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

export default QuestionDetail