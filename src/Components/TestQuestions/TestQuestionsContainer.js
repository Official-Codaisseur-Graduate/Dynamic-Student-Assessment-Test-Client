import React, { Component } from "react";
import { getQuestions } from "../../actions/questions";
import { connect } from "react-redux";
// import TestQuestionsAnswers from "./TestQuestionsAnswers";
import TestQuestionsAnswers1 from "./TestQuestionsAnswers1";
import TestQuestions from "./TestQuestions";

class TestQuestionsContainer extends Component {
  componentDidMount() {
    this.props.getQuestions();
    // this.props.getAnswer();
  }

  handleChange = event => {
    console.log("handle change");
    return event.target.value;
  };

  render() {
    return (
      <div>
        <TestQuestions question={this.props.question} />
        {/* <TestQuestionsAnswers answers={this.props.question} /> */}
        <TestQuestionsAnswers1 answers={this.props.question} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    question: state.question
  };
}

export default connect(
  mapStateToProps,
  { getQuestions }
)(TestQuestionsContainer);
