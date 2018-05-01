import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost, deletePost, updatePost } from '../actions/index';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      title: this.props.post.title,
      content: this.props.post.content,
      tags: this.props.post.tags,
      coverURL: this.props.post.cover_url,
    };
  }

  componentDidMount = () => {
    this.props.fetchPost(this.props.match.params.postID);
    this.setState({
      title: this.props.post.title,
      content: this.props.post.content,
      tags: this.props.post.tags,
      coverURL: this.props.post.cover_url,
    });
  };

  onDeleteClick = () => {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  onSubmitClick = () => {
    console.log('SUBMITTED');
    this.setState({ isEditing: false });
    const fields = {
      title: this.state.title, tags: this.state.tags, content: this.state.content, cover_url: this.state.coverURL,
    };
    this.props.updatePost(this.props.match.params.postID, fields);
  }

  onUpdateClick = () => {
    this.setState({ isEditing: true });
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  onContentChange = (event) => {
    this.setState({ content: event.target.value });
  }

  onTagsChange = (event) => {
    this.setState({ tags: event.target.value });
  }

  onCoverURLChange = (event) => {
    this.setState({ coverURL: event.target.value });
  }

  renderPostBox = () => {
    if (!this.state.isEditing) {
      return (
        <div>
          <button onClick={this.onDeleteClick}>DELETE</button>
          <button onClick={this.onUpdateClick}>UPDATE</button>
          <h2>Title</h2>
          <p>{this.props.post.title}</p>
          <h2>Content</h2>
          <p>{this.props.post.content}</p>
          <h2>Tags</h2>
          <p>{this.props.post.tags}</p>
          <h2>Cover url</h2>
          <p>{this.props.post.cover_url}</p>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.onDeleteClick}>DELETE</button>
          <button onClick={this.onSubmitClick}>SUBMIT</button>
          <h2>Title</h2>
          <input onChange={this.onTitleChange} value={this.state.title} />
          <h2>Content</h2>
          <input onChange={this.onContentChange} value={this.state.content} />
          <h2>Tags</h2>
          <input onChange={this.onTagsChange} value={this.state.tags} />
          <h2>Cover url</h2>
          <input onChange={this.onCoverURLChange} value={this.state.coverURL} />
        </div>
      );
    }
  }


  render() {
    console.log('A single post');
    console.log(this.props.post);
    return (
      <div>
        {this.renderPostBox()}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    post: state.posts.post,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post));
