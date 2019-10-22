import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../actions/user';
import { connect } from 'react-redux';

class LoginFormContainer extends React.Component {
  state = { email: '', code: '' };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.code);
    this.props.history.push('/instructions');
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

export default connect(
  null,
  { login }
)(LoginFormContainer);
