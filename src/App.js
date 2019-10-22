import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginFormContainer from './Components/Login/LoginFormContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <header></header>
          <div>
            <Route path='/login' exact component={LoginFormContainer} />
          </div>

          <footer>
            <br />
            <Typography variant='body2' color='textSecondary' align='center'>
              {'Copyright © Codaisseur '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
