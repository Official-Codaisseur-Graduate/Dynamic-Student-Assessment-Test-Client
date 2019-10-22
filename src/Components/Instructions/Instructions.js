import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../../images/logo.png';

export default class Instructions extends Component {
  state = {
    startInstructions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nisi, pulvinar quis erat at, blandit iaculis nisl. In feugiat tincidunt ligula eget condimentum. Praesent nulla odio, iaculis eu tortor quis, rutrum posuere lorem. Proin eget arcu id mi pulvinar imperdiet. Fusce at ante vitae justo maximus accumsan. Suspendisse tempus at purus in molestie. Nunc eu magna condimentum, pulvinar lorem eu, tincidunt dui. Etiam laoreet faucibus nisi, quis viverra lacus sodales ac. Morbi ac dui a odio placerat iaculis. Quisque imperdiet massa quis hendrerit laoreet. Suspendisse molestie viverra dapibus.',
    endInstructions: 'Thanks for taking the test!',
  };

  render() {
    return (
      <div>
        <Box m={10}>
          <header>
            <img
              className='logo'
              height='80px'
              className='center'
              alt='app logo'
              src={logo}></img>
          </header>
          <Typography
            component='h4'
            variant='h4'
            align='center'
            color='textPrimary'
            gutterBottom>
            <h5>{'Test instructions'}</h5>
            <h6>
              {
                'Read the instructions below: when you are ready click on the button to start the test'
              }
            </h6>
          </Typography>
        </Box>
        <Box m={10}>
          <Typography
            component='h6'
            variant='h6'
            align='left'
            color='textPrimary'
            gutterBottom>
            <p>{this.state.startInstructions}</p>
          </Typography>
        </Box>
        <div>
          <Box m={10} align='center'>
            <Button variant='contained' color='primary' href='/admission-test'>
              Start test
            </Button>
          </Box>
        </div>
      </div>
    );
  }
}
