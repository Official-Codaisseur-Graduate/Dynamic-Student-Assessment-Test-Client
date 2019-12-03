import React, { Component } from "react";
import { response } from "../../actions/question";
import { connect } from "react-redux";
import TestQuestionsAnswers from "./TestQuestionsAnswers";
import TestQuestions from "./TestQuestions";
import Box from "@material-ui/core/Box";
import ProgressMobileStepper from "./ProgressMobileStepper";
import logo from "../../images/logo.png";
import LoginFormContainer from "../Login/LoginFormContainer";

class TestQuestionsContainer extends Component {
  state = {
    testId: this.props.auth ? this.props.auth.id : null,
    answerId: null,
    activeStep: 0
  };
  componentDidMount = () => {
    this.props.response({ testId: this.state.testId, answerId: null });

    // for first question, answerId is null
  };

  submitAnswers() {
    this.props.response(this.state);
  }

  handleChange = event => {
    this.setState({ answerId: event.target.value });
    console.log("state", this.state);
  };
  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
    const { testId, answerId } = this.state;
    this.props.response({ testId, answerId });
    console.log("next");
  };
  // handleBack is not working,
  // the button is there though --> see ProgressMobileStepper.js
  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
    console.log("back");
  };

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
    auth: state.auth
  };
}

export default connect(mapStateToProps, { response })(TestQuestionsContainer);
