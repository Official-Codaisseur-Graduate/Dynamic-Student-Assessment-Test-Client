import React, { Component, lazy, Suspense } from 'react';
import { getQuestions } from '../../actions/questions';
import { connect } from 'react-redux';
import TestQuestionsAnswers from './TestQuestionsAnswers';
import TestQuestions from './TestQuestions';

// const TestQuestionsLazy = lazy(() => {
//   return Promise.all([
//     import('./TestQuestions'),
//     new Promise(resolve => setTimeout(resolve, 2000)),
//   ]).then(([moduleExports]) => moduleExports);
// });

class TestQuestionsContainer extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    return (
      <div>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {/* <TestQuestionsLazy question={this.props.question} />; */}
        {/* </Suspense> */}
        <TestQuestions question={this.props.questions} />
        <TestQuestionsAnswers />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.questions);
  return {
    user: state.user,
    questions: state.questions,
  };
}

export default connect(
  mapStateToProps,
  { getQuestions }
)(TestQuestionsContainer);
