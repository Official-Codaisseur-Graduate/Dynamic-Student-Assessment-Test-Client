import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';

class LoginFormContainer extends React.Component {
  state = { email: '', code: '' };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.code);
    this.props.history.push('/instructions');
    //  this old code, will redirect event though the onSubmit is wrong (even though either email or code is not correct, fix this to only work when email + code is correct
    /// use redirect instead in render()???
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

// const mapStateToProps = state => {
//   return {
//     token: state.auth
//   };
// };

export default connect(
  null,
  { login }
)(LoginFormContainer);
