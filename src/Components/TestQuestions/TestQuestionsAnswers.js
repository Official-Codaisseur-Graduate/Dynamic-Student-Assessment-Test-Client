import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
//import logo from '../../images/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function TestQuestionAnswers() {
  const classes = useStyles();
  const [value, setValue] = React.useState('this is the local state');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Box m={10} align='center'>
        {/* <header>
          <img
            className='logo'
            height='80px'
            className='center'
            alt='app logo'
            src={logo}></img>
        </header> */}

        <main>
          <FormControl component='fieldset' className={classes.formControl}>
            <FormLabel component='legend'>
              Select the correct answer below:
            </FormLabel>
            <br />
            <RadioGroup
              aria-label='answers'
              name='answers'
              align='left'
              value={value}
              onChange={handleChange}>
              <FormControlLabel
                value='option1'
                control={<Radio color='primary' />}
                label='This is an answer'
                //labelPlacement='start'
              />
              <FormControlLabel
                value='option2'
                control={<Radio color='primary' />}
                label='This is another answer'
                //labelPlacement='start'
              />
              <FormControlLabel
                value='option3'
                control={<Radio color='primary' />}
                label='This is yet another answer'
                //labelPlacement='start'
              />
              <FormControlLabel
                value='option4'
                control={<Radio color='primary' />}
                label='This is yet one more answer'
                //labelPlacement='start'
              />
            </RadioGroup>
          </FormControl>
          <br />
          <div>
            <br />
            <br />
            <Button variant='contained' color='primary'>
              Next question
            </Button>
          </div>
        </main>
      </Box>
    </div>
  );
}
