import React, { Component, lazy, Suspense } from 'react';
import { getQuestions, getAnswer } from '../../actions/questions';
import { connect } from 'react-redux';
import TestQuestionsAnswers from './TestQuestionsAnswers';
import TestQuestions from './TestQuestions';

class TestQuestionsContainer extends Component {
  componentDidMount() {
    this.props.getQuestions();
    this.props.getAnswer();
  }

  render() {
    return (
      <div>
        <TestQuestions question={this.props.questions} />
        <TestQuestionsAnswers answers={this.props.answers} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.questions);
  return {
    user: state.user,
    questions: state.questions,
    answers: state.answers,
  };
}

export default connect(
  mapStateToProps,
  { getQuestions, getAnswer }
)(TestQuestionsContainer);
