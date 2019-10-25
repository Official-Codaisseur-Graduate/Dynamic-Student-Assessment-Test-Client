import React, { Component } from 'react';
import { getQuestions } from '../../actions/questions';
import { connect } from 'react-redux';
import TestQuestionsAnswers from './TestQuestionsAnswers';
import TestQuestions from './TestQuestions';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class TestQuestionsContainer extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  handleChange = event => {
    console.log('handle change');
    return event.target.value;
  };

  render() {
    return (
      <div>
        <Box m={10} align='center'>
          <TestQuestions question={this.props.question} />
          <TestQuestionsAnswers answers={this.props.question} />

          <br />
          <br />
          <Button
            variant='contained'
            color='primary'
            // go to the next question: to be changed
            onClick={() => {
              return this.props.getQuestions();
              //console.log('hello');
            }}>
            Next question
          </Button>
        </Box>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    question: state.question,
  };
}

export default connect(
  mapStateToProps,
  { getQuestions }
)(TestQuestionsContainer);
