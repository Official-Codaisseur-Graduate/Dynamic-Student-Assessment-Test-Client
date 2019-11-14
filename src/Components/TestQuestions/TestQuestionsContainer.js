import React, { Component } from 'react';
import { getQuestions } from '../../actions/questions';
import { postUserAnswer } from '../../actions/answers';
import { connect } from 'react-redux';
import TestQuestionsAnswers from './TestQuestionsAnswers';
import TestQuestions from './TestQuestions';
// import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ProgressMobileStepper from './ProgressMobileStepper'

class TestQuestionsContainer extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  submitAnswers() {
    this.props.postUserAnswer();
  }

  handleChange = event => {
    console.log('handle change');
    return event.target.value;
  };

  submitDataAndLoadNewQuestion = async () => {
    await this.props.postUserAnswer();
    this.props.getQuestions();
  };

  render() {
    return (
      <div>
        <Box m={10} align='center'>
          <TestQuestions question={this.props.question} />
          <TestQuestionsAnswers answers={this.props.question} />
          <br />
          <br />
          <ProgressMobileStepper
          nextButton={this.submitDataAndLoadNewQuestion()}
          // backButton={}
          /// add an action that takes care of loading the previous action --> make a router.get for this??
          />
        </Box>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    question: state.question,
    answer: state.answer,
  };
}

export default connect(
  mapStateToProps,
  { getQuestions, postUserAnswer }
)(TestQuestionsContainer);


       //  <Button  variant='contained'
          //   color='primary'
          //   // Sumbit answer and load the next question
          //   onClick={() => {
          //     this.submitDataAndLoadNewQuestion();
          //   }}>
          //   Next question
          // </Button>