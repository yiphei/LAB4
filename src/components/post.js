import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { fetchPost } from '../actions/index';

// import React from 'react';


class Post extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount = () => {
  //   this.props.fetchPost(this.props.match.params.postID);
  // };
  //
  //
  // render() {
  //   console.log('POSTSTST');
  //   return (
  //     <div>
  //       <p>{this.props.post.title}</p>
  //       <p>{this.props.post.content}</p>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
      A new posts
      </div>
    );
  }
}
//
// const mapStateToProps = state => (
//   {
//     post: state.posts.post,
//   }
// );

// export default withRouter(connect(mapStateToProps, { fetchPost })(Post));
export default Post;
