import { NavLink } from 'react-router-dom';
import React from 'react';

const Nav = (props) => {
  return (
    <nav>
      <ul className="nav-bar">
        <li><NavLink exact to="/" className="logo">Deathnote</NavLink></li>
        <li><NavLink to="/posts/new"><button className="newpost">Add post</button></NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
