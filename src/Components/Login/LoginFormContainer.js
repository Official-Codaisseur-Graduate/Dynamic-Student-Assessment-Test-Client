import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
// import { Redirect } from "react-router-dom";
import logo from '../../images/codaisseur-logo-long.png';

class LoginFormContainer extends React.Component {
  state = { 
      email: '', 
      code: '',
      isValid: true
      }

      onSubmit = (event) => {
      event.preventDefault()
      if(this.state.email === ''||this.state.code ===''){
          //error message if any of the fields are empty
        this.setState({isValid: false})
        }else{
          this.props.login(this.state.email, this.state.code);
          this.props.history.push('/instructions');
        }
    }
  

  onChange = event => {
    this.setState({isValid: true})
    this.setState({
      [event.target.name]: event.target.value,
    });
  };


  render() {
    // return this.props.jwt ? (
    //   // If we have a jw-token, redirect to instructions
    //   <Redirect to="/instructions" />
    // ) : (
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
        valid={this.state.isValid}/>
        </header>
    )
  }
}

function mapStateToProps (state) {
    console.log("mstp", state)
    return {
        // jwt: state.auth
    }
}

export default connect(
  mapStateToProps,
  { login }
)(LoginFormContainer);
