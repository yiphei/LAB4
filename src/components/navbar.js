import { withRouter, NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../actions/index';


class Nav extends Component {
  constructor(props) {
    super(props);
  }

  onClickSignOut = (event) => {
    this.props.signoutUser(this.props.history);
  }

  renderHelper = () => {
    if (this.props.authenticated === false) {
      return (
        <nav>
          <ul className="nav-bar">
            <li><NavLink exact to="/" className="logo">NOTED</NavLink></li>
            <div className="nav-actions">
              <li><NavLink to="/posts/new"><button className="newpost">Add post</button></NavLink></li>
              <li><NavLink to="/signin"><button className="signin-button">Sign in</button></NavLink></li>
              <li><NavLink to="/signup"><button className="signup-button">Sign up</button></NavLink></li>
            </div>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav>
          <ul className="nav-bar">
            <li><NavLink exact to="/" className="logo">NOTED</NavLink></li>
            <div className="nav-actions">
              <li><NavLink to="/posts/new"><button className="newpost">Add post</button></NavLink></li>
              <li><button className="signout-button" onClick={this.onClickSignOut}>Sign out</button></li>
            </div>
          </ul>
        </nav>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderHelper()}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { signoutUser })(Nav));
