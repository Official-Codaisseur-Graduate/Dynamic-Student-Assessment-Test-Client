import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import logo from '../../images/logo.png';

export default class TestQuestions extends Component {
  render() {
    return (
      <div>
        <Box m={10} align='center'>
          <header>
            <img
              className='logo'
              height='80px'
              className='center'
              alt='app logo'
              src={logo}></img>
          </header>
          <main>
            <Typography
              component='h4'
              variant='h4'
              align='center'
              color='textPrimary'
              gutterBottom>
              <h4>{'Question: here we fetch the question'}</h4>
              <h6>{'Click on the correct answer:'}</h6>
              <p>{'Answers: here we fetch the corresponding answer options'}</p>
            </Typography>

            <div>
              <Button variant='contained' color='primary'>
                Next question
              </Button>
            </div>
          </main>
        </Box>
      </div>
    );
  }
}
