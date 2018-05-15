import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signinUser } from '../actions/index';


class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
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
        email: this.state.email, password: this.state.password,
      };
      this.props.signinUser(fields, this.props.history);
    }
  }

  render() {
    return (
      <div className="newpost-section">
        <h1>Sign In</h1>
        <input onChange={this.onEmailChange} value={this.state.title} placeholder="email" />
        <input onChange={this.onPasswChange} value={this.state.content} placeholder="password" />
        <button onClick={this.onButtonClick}>Submit</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { signinUser })(SignIn));
