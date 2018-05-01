// import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../actions/index';

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      tags: '',
      coverURL: '',
    };
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

  onButtonClick = () => {
    if (this.state.title) {
      const fields = {
        title: this.state.title, tags: this.state.tags, content: this.state.content, cover_url: this.state.coverURL,
      };
      this.props.createPost(fields, this.props.history);
    }
  }

  render() {
    return (
      <div className="newpost-section">
        <h1>Create a new post</h1>
        <input onChange={this.onTitleChange} value={this.state.title} placeholder="title" />
        <input onChange={this.onContentChange} value={this.state.content} placeholder="content" />
        <input onChange={this.onTagsChange} value={this.state.tags} placeholder="tags" />
        <input onChange={this.onCoverURLChange} value={this.state.coverURL} placeholder="cover_url" />
        <button onClick={this.onButtonClick}>SUBMIT</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));
