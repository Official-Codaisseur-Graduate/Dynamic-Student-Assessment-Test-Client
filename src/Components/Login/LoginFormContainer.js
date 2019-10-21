import React from 'react';
import LoginForm from './LoginForm';

class LoginFormContainer extends React.Component {
  state = { email: '', password: '' };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.code);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default LoginFormContainer;
