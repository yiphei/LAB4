import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { fetchPosts } from '../actions/index';
import marked from 'marked';


class Posts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchPosts();
  };

  onPostClick = () => {
  }

  mapping = () => {
    return this.props.posts.map((post) => {
      return (
        <NavLink to={`/posts/${post.id}`}>
          <div className="postDetail" onClick={this.onPostClick}>
            <div className="post-element" dangerouslySetInnerHTML={{ __html: marked(post.cover_url || '') }} />
            <div className="post-element" dangerouslySetInnerHTML={{ __html: marked(post.title || '') }} />
            <div className="post-element" dangerouslySetInnerHTML={{ __html: marked(post.tags || '') }} />
          </div>
        </NavLink>
      );
    });
  }

  render() {
    return (
      <div className="postComponent">
        <h1>Posts</h1>
        <div className="postSection">
          {this.mapping()}
        </div>
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
