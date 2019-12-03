import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

// Display answers UI
export default class TestQuestionsAnswers extends Component {
  state = { selected: "" };

  render() {
    const { answers } = this.props;

    if (!answers) {
      return "loading...";
    } else {
      return (
        <div>
          <Box m={10} align="center">
            <main>
              <FormControl component="fieldset" className={""}>
                <FormLabel component="legend">
                  Select the correct answer below
                </FormLabel>
                <br />
                <RadioGroup
                  aria-label="answers"
                  name="answers"
                  align="left"
                  value={this.props.selected}
                  onChange={this.props.handleChange}
                >
                  <FormControlLabel
                    value={`${answers.answers[0].id}`}
                    control={<Radio color="primary" />}
                    label={answers.answers[0].answerContent}
                  />
                  <FormControlLabel
                    value={`${answers.answers[1].id}`}
                    control={<Radio color="primary" />}
                    label={answers.answers[1].answerContent}
                  />
                  <FormControlLabel
                    value={`${answers.answers[2].id}`}
                    control={<Radio color="primary" />}
                    label={answers.answers[2].answerContent}
                  />
                  <FormControlLabel
                    value={`${answers.answers[3].id}`}
                    control={<Radio color="primary" />}
                    label={answers.answers[3].answerContent}
                  />
                </RadioGroup>
              </FormControl>
              <br />
            </main>
          </Box>
        </div>
      );
    }
  }
}
