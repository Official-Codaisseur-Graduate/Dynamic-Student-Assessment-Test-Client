import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginFormContainer from './Components/Login/LoginFormContainer';
// import logo from './images/logo.png';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to='/'>
            {' '}
            {/* <img
              className='logo'
              height='100px'
              className='center'
              alt='app logo'
              src={logo}></img> */}
          </Link>
        </header>
        <div>
          <LoginFormContainer />
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
    );
  }
}

export default App;
