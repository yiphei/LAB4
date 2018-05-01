import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../actions/index';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchPost(this.props.match.params.postID);
  };


  render() {
    console.log('A single post');
    console.log(this.props.post);
    return (
      <div>
        <p>{this.props.post.title}</p>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    post: state.posts.post,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPost })(Post));
