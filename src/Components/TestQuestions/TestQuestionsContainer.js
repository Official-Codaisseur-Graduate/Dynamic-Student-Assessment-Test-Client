import React, { Component } from "react";
import { response } from "../../actions/question";
import { connect } from "react-redux";
import TestQuestionsAnswers from "./TestQuestionsAnswers";
import TestQuestions from "./TestQuestions";
import Box from "@material-ui/core/Box";
import ProgressMobileStepper from "./ProgressMobileStepper";
import logo from "../../images/logo.png";
import LoginFormContainer from "../Login/LoginFormContainer";
import { Link } from "react-router-dom";

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
  };

  handleNext = async () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
    const { testId, answerId } = this.state;
    await this.props.response({ testId, answerId });
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
            You're done! Thanks for taking the test.
            <br />
            You can check your results <Link to={`/results`}>here</Link>.
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
    auth: state.auth
  };
}

export default connect(mapStateToProps, {
  response
})(TestQuestionsContainer);
