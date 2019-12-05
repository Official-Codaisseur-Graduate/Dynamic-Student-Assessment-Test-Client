import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Typography from "@material-ui/core/Typography";
import { Route } from "react-router-dom";
import LoginFormContainer from "./Components/Login/LoginFormContainer";
import Instructions from "./Components/Instructions/Instructions";
import TestQuestionsContainer from "./Components/TestQuestions/TestQuestionsContainer";
import TestResults from "./Components/TestResults/TestResults";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div>
            <Route path="/" exact component={LoginFormContainer} />
            <Route path="/login" exact component={LoginFormContainer} />
            <Route path="/instructions" exact component={Instructions} />
            <Route
              path="/admission-test"
              exact
              component={TestQuestionsContainer}
            />
            <Route path="/results" exact component={TestResults} />
          </div>

          <footer>
            <br />
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © Codaisseur "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
