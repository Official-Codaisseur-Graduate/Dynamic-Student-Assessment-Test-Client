import React, { Component } from 'react';
import logo from '../../images/logo.png';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default class TestQuestions extends Component {
  render() {
    const questions = this.props.question;
    console.log('this.props', this.props.question);

    return (
      <div className='questionList'>
        <Box m={10} align='center'>
          <header>
            <img
              className='logo'
              height='80px'
              className='center'
              alt='app logo'
              src={logo}></img>
          </header>

          <Typography
            component='h6'
            variant='h6'
            align='center'
            color='textPrimary'
            gutterBottom>
            {!questions && 'Loading...'}

            {questions && (
              <p>
                {questions.map(question => (
                  <p key={question.id}>{question.content}</p>
                ))}
              </p>
            )}
          </Typography>
        </Box>
      </div>
    );
  }
}
