import React, { Component } from "react";
import { connect } from "react-redux";

class TestResults extends Component {
  render() {
    const questionArray = this.props.history.map(submittedAnswer => {
      return submittedAnswer[0].question;
    });
    const submittedAnswerIds = this.props.history.map(submittedAnswer => {
      return submittedAnswer[0].history[0].answerId;
    });

    return (
      <ol>
        {questionArray.map(question => {
          return (
            <li>
              {question.questionContent}
              <ul>
                {this.props.history.map(submittedAnswer => {
                  return submittedAnswer
                    .filter(answer => {
                      return answer.questionId === question.id;
                    })
                    .map(answer => {
                      if (
                        submittedAnswerIds.includes(answer.id) &&
                        answer.correct
                      ) {
                        return (
                          <li style={{ color: "green" }}>
                            {answer.answerContent}
                          </li>
                        );
                      } else if (
                        submittedAnswerIds.includes(answer.id) &&
                        !answer.correct
                      ) {
                        return (
                          <li
                            style={{
                              color: "red",
                              textDecoration: "line-through"
                            }}
                          >
                            {answer.answerContent}
                          </li>
                        );
                      } else if (answer.correct) {
                        return (
                          <li style={{ color: "green" }}>
                            {answer.answerContent}
                          </li>
                        );
                      } else {
                        return <li>{answer.answerContent}</li>;
                      }
                    });
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history
});

export default connect(mapStateToProps)(TestResults);
