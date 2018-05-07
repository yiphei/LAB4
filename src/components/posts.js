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

  mapping = () => {
    return this.props.posts.map((post) => {
      if (post.cover_url) {
        return (
          <NavLink to={`/posts/${post._id}`}>
            <div className="postDetail" onClick={this.onPostClick}>
              <img src={post.cover_url} alt="a cover" />
              <div className="post-title" dangerouslySetInnerHTML={{ __html: marked(post.title || '') }} />
              <div className="post-tags" dangerouslySetInnerHTML={{ __html: marked(post.tags || '') }} />
            </div>
          </NavLink>
        );
      } else {
        return (
          <NavLink to={`/posts/${post._id}`}>
            <div className="postDetail" onClick={this.onPostClick}>
              <div className="post-title" dangerouslySetInnerHTML={{ __html: marked(post.title || '') }} />
              <div className="post-tags" dangerouslySetInnerHTML={{ __html: marked(post.tags || '') }} />
            </div>
          </NavLink>
        );
      }
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
