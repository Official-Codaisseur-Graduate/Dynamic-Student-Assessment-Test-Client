import React, { Component } from 'react';
import logo from '../../images/logo.png';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// Test questions UI
export default class TestQuestions extends Component {
  render() {
    const question = this.props.question;

    return (
      <div className='questionList'>
        <Box m={10} align='center'>
          <header>
            <img
              className='logo'
              height='80px'
              alt='app logo'
              src={logo}></img>
          </header>
          <br />
          <br />

          <Typography
            component='h6'
            variant='h6'
            align='center'
            color='textPrimary'
            gutterBottom>
            {!question && 'Loading...'}

            {question && (
              <div>
                <h2>{question.questionContent}</h2>
                {/* Remove Level later: for dev purposes only */}
                <h2>{question.initialLevel}</h2>
              </div>
            )}
          </Typography>
        </Box>
      </div>
    );
  }
}
