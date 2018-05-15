import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../actions/index';


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  onUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  onPasswChange = (event) => {
    this.setState({ password: event.target.value });
  }

  onButtonClick = () => {
    if (this.state.email && this.state.password) {
      const fields = {
        username: this.state.username, email: this.state.email, password: this.state.password,
      };
      console.log('New Account Created');
      this.props.signupUser(fields, this.props.history);
    }
  }

  render() {
    return (
      <div className="newpost-section">
        <h1>Create a new account</h1>
        <input onChange={this.onUsernameChange} value={this.state.username} placeholder="username" />
        <input onChange={this.onEmailChange} value={this.state.title} placeholder="email" />
        <input onChange={this.onPasswChange} value={this.state.content} placeholder="password" />
        <button onClick={this.onButtonClick}>Sign up</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { signupUser })(SignUp));
