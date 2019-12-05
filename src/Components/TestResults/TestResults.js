import React, { Component } from "react";
import { connect } from "react-redux";

class TestResults extends Component {
  render() {
    return (
      <ul>
        {this.props.history.map(answer => {
          return <li>{answer.answerId}</li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history
});

export default connect(mapStateToProps)(TestResults);
