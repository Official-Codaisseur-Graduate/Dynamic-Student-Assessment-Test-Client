import React, { Component } from 'react';
//import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default class TestQuestionsAnswers extends Component {
  state = { selected: '' };

  handleChange = event => {
    this.setState({ selected: event.target.value });
  };

  render() {
    const { answers } = this.props;
    const { selected } = this.state;
    console.log('selected', selected);
    console.log('answers-----', answers);

    if (!answers) {
      return 'loading...';
    } else {
      return (
        <div>
          <Box m={10} align='center'>
            <main>
              <FormControl component='fieldset' className={''}>
                <FormLabel component='legend'>
                  Select the correct answer below:
                </FormLabel>
                <br />
                <RadioGroup
                  aria-label='answers'
                  name='answers'
                  align='left'
                  value={selected}
                  onChange={this.handleChange}>
                  <FormControlLabel
                    value={`${answers.answers[0].id}`}
                    control={<Radio color='primary' />}
                    label={answers.answers[0].answerContent}
                    // labelPlacement="start"
                  />
                  <FormControlLabel
                    value={`${answers.answers[1].id}`}
                    control={<Radio color='primary' />}
                    label={answers.answers[1].answerContent}
                    // labelPlacement="start"
                  />
                  <FormControlLabel
                    value={`${answers.answers[2].id}`}
                    control={<Radio color='primary' />}
                    label={answers.answers[2].answerContent}
                    // labelPlacement="start"
                  />
                  <FormControlLabel
                    value={`${answers.answers[3].id}`}
                    control={<Radio color='primary' />}
                    label={answers.answers[3].answerContent}
                    // labelPlacement="start"
                  />
                </RadioGroup>
              </FormControl>
              <br />
              {/* <div>
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
              </div> */}
            </main>
          </Box>
        </div>
      );
    }
  }
}
