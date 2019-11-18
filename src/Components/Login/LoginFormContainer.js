import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import logo from '../../images/codaisseur-logo-long.png';

class LoginFormContainer extends React.Component {
  state = {
    code: '',
    isValid: true
  }

  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.code === '') {
      this.setState({ isValid: false })
    } else {
      this.props.login(this.state.code);
    }
  }


  onChange = event => {
    this.setState({ isValid: true })
    this.setState({
      [event.target.name]: event.target.value,
    });
  };


  render() {
    if (this.props.auth !== null) {
      return <Redirect to="/instructions" />
    }
    return (
      <header>
        <img
          className='logo'
          height='80px'
          align="middle"
          alt='app logo'
          src={logo}>
        </img>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          valid={this.state.isValid} />
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(
  mapStateToProps,
  { login }
)(LoginFormContainer);
