import React, { Component } from 'react';

export default class TestQuestions extends Component {
  render() {
    const questions = this.props.question;
    console.log('this.props', this.props.question);

    return (
      <div className='questionList'>
        {!questions && 'Loading...'}

        {questions && (
          <p>
            {questions.map(question => (
              <p key={question.id}>{question.content}</p>
            ))}
          </p>
        )}
      </div>
    );
  }
}
