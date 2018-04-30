import { NavLink } from 'react-router-dom';
import React from 'react';

const Nav = (props) => {
  console.log('NAVBAR');
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/">My Super Awesome Blog</NavLink></li>
        <li><NavLink to="/posts/new">new post</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
