import React, { Component, lazy, Suspense } from 'react';
import { getQuestions } from '../../actions/questions';
import { connect } from 'react-redux';
import TestQuestionsAnswers from './TestQuestionsAnswers';
import TestQuestions from './TestQuestions';

class TestQuestionsContainer extends Component {
  componentDidMount() {
    this.props.getQuestions();
    // this.props.getAnswer();
  }

  render() {
    return (
      <div>
        <TestQuestions question={this.props.question} />
        <TestQuestionsAnswers answers={this.props.question} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.questions);
  return {
    user: state.user,
    question: state.question,
  };
}

export default connect(
  mapStateToProps,
  { getQuestions }
)(TestQuestionsContainer);
