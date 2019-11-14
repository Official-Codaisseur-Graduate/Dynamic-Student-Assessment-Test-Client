import React, { Component } from "react"
import { response } from "../../actions/questions"
import { connect } from "react-redux"
import TestQuestionsAnswers from "./TestQuestionsAnswers"
import TestQuestions from "./TestQuestions"
// import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box"
import ProgressMobileStepper from "./ProgressMobileStepper"

class TestQuestionsContainer extends Component {
	state = {
		testId: 1,
		answerId: null,
		activeStep: 0
	}
	componentDidMount() {
		// now we just hardcode testId for testing
		// for first question, answerId is null
		this.props.response({ testId: 1, answerId: null })
	}

	submitAnswers() {
		this.props.response(this.state)
	}

	handleChange = event => {
		this.setState({ answerId: event.target.value })
		console.log("state", this.state)
	}
	handleNext = () => {
		this.setState({ activeStep: this.state.activeStep + 1 })
		const { testId, answerId } = this.state
		this.props.response({ testId, answerId })
		console.log("next")
	}
	handleBack = () => {
		this.setState({ activeStep: this.state.activeStep - 1 })
		console.log("back")
	}

	// submitDataAndLoadNewQuestion = async () => {
	//   await this.props.postUserAnswer();
	//   this.props.getQuestions();
	// };

	render() {
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
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		question: state.question,
		answer: state.answer
	}
}

export default connect(mapStateToProps, { response })(TestQuestionsContainer)

//  <Button  variant='contained'
//   color='primary'
//   // Sumbit answer and load the next question
//   onClick={() => {
//     this.submitDataAndLoadNewQuestion();
//   }}>
//   Next question
// </Button>
