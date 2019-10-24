import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
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

export default function TestQuestionAnswers(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState();
  // console.log('props.answer', props.answer);
  console.log('testAnswers component props', props);

  const handleChange = event => {
    event.preventDefault();
    setValue(event.target.value);
  };

  if (!props) {
    return 'loading...';
  } else {
    return (
      <div>
        <Box m={10} align='center'>
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
                  value={''}
                  control={<Radio color='primary' />}
                  label={''}
                  //labelPlacement='start'
                />
                <FormControlLabel
                  value={'1'}
                  control={<Radio color='primary' />}
                  label={''}
                  //labelPlacement='start'
                />
                <FormControlLabel
                  value={''}
                  control={<Radio color='primary' />}
                  label={''}
                  //labelPlacement='start'
                />
                <FormControlLabel
                  value={''}
                  control={<Radio color='primary' />}
                  label={''}
                  //labelPlacement='start'
                />
              </RadioGroup>
            </FormControl>
            <br />
            <div>
              <br />
              <br />
              <Button
                variant='contained'
                color='primary'
                // go to the next question: to be changed
                onClick={() => {
                  return console.log('hello');
                }}>
                Next question
              </Button>
            </div>
          </main>
        </Box>
      </div>
    );
  }
}
