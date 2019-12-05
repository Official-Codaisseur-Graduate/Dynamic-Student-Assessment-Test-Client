import React, { Component } from "react";
import { response, getHistory, loadPrevQuestion } from "../../actions/question";
import { connect } from "react-redux";
import TestQuestionsAnswers from "./TestQuestionsAnswers";
import TestQuestions from "./TestQuestions";
import Box from "@material-ui/core/Box";
import ProgressMobileStepper from "./ProgressMobileStepper";
import logo from "../../images/logo.png";
import LoginFormContainer from "../Login/LoginFormContainer";
import superagent from "superagent";

class TestQuestionsContainer extends Component {
  state = {
    testId: this.props.auth ? this.props.auth.id : null,
    answerId: null,
    activeStep: 0,
    oldAnswerId: ""
  };
  componentDidMount = () => {
    const { answerId, testId } = this.state;
    this.props.response({ testId, answerId });
    // for first question, answerId is null
  };

  submitAnswers() {
    this.props.response(this.state);
  }

  handleChange = event => {
    this.setState({ answerId: event.target.value });
    console.log("state", this.state);
  };
  handleNext = async () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
    const { testId, answerId } = this.state;
    
    await this.props.response({ testId, answerId });

    const code = this.props.auth.code;
    setTimeout(async () => {
      if (this.state.activeStep === 5) {
        await superagent.put(`http://localhost:4000/test/${code}`).send({
          code: ""
        });
        await superagent.put(`http://localhost:4000/testscore/${testId}`);
      }
    }, 1000);

  };
  // handleBack is not working,
  // the button is there though --> see ProgressMobileStepper.js
  handleBack = async () => {
    await this.setState({ activeStep: this.state.activeStep - 1 });
    //answerId from the state is what we just selected at the question before
    const { answerId } = this.state;
    const currentIndex = this.props.history.filter(answer => {
      return answer.answerId === Number(answerId);
    });
    // const currentTestId = currentIndex.map(item => item.testId);
    currentIndex.map(async item => {
      await this.props.loadPrevQuestion(item.answerId);
    });

    // progress: able to go back to the previous question, but just this once :)
    // only able to load that question for now

    console.log("what did we find?: ", currentIndex);
    console.log("back");
  };

  sendScore = async () => {};

  render() {
    const { activeStep } = this.state;

    if (activeStep === 5) {
      return (
        <div>
          <Box m={10} align="center">
            <header>
              <img
                className="logo"
                height="80px"
                alt="app logo"
                src={logo}
              ></img>
            </header>
            <br />
            <br />
            You're done! Thanks for taking the test
          </Box>
        </div>
      );
    } else if (this.state.testId) {
      return (
        <div>
          <Box m={10} align="center">
            <TestQuestions question={this.props.question} />
            <TestQuestionsAnswers
              answers={this.props.question}
              handleChange={this.handleChange}
              selected={this.state.answerId}
            />
            <br />
            <br />
            <ProgressMobileStepper
              handleNext={this.handleNext}
              handleBack={this.handleBack}
              activeStep={this.state.activeStep}
            />
          </Box>
        </div>
      );
    } else {
      return <LoginFormContainer />;
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    question: state.question,
    answer: state.answer,
    auth: state.auth,
    history: state.history
  };
}

export default connect(mapStateToProps, {
  response,
  getHistory,
  loadPrevQuestion
})(TestQuestionsContainer);
