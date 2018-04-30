import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import { fetchPosts } from '../actions/index';


// const Posts = (props) => {
//   return (
//     <p> All the posts</p>
//   );
// };
//
//
// // componentDidMount = () => {
// //
// // };
//
//
// const mapStateToProps = state => (
//   {
//     posts: state.posts.all,
//   }
// );
//
// export default withRouter(connect(mapStateToProps, null)(Posts));
// // export default Posts;

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchPosts();
  };

  onPostClick = () => {
    console.log('CLICKED');
  }

  mapping = () => {
    return this.props.posts.map((post) => {
      return (
        <div className="postDetail">
          <p onClick={this.onPostClick}><NavLink to={`/posts/${post.id}`}>{post.title}</NavLink></p>
          <p>{post.tags}</p>
        </div>
      );
    });
  }

  render() {
    console.log('POSTSTST');
    return (
      <div>
        {this.mapping()}
      </div>
    );
  }
}


const mapStateToProps = state => (
  {
    posts: state.posts.all,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPosts })(Posts));
