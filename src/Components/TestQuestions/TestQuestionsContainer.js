import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TestQuestions from './TestQuestions';

export default class TestQuestionsContainer extends Component {
  render() {
    return (
      <div>
        <TestQuestions />
      </div>
    );
  }
}
