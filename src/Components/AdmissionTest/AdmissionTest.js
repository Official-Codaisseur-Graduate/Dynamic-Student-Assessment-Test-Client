import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdmissionTest extends Component {
  render() {
    return (
      <main>
        <h1>Test</h1>
        <div className="question">
          <h3>Question 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <br></br>
        <div className="answers">
          <p>Answer 1: </p>
          <p>Answer 2: </p>
          <p>Answer 3: </p>
          <p>Answer 4: </p>
        </div>
        <Link>
          <button>Next question</button>
        </Link>
      </main>
    );
  }
}
