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
    const fields = {
      title: this.state.title, tags: this.state.tags, content: this.state.content, cover_url: this.state.coverURL,
    };
    this.props.createPost(fields, this.props.history);
  }

  render() {
    return (
      <div>
        <h1>Create a new POST </h1>
        <h2>Title</h2>
        <input onChange={this.onTitleChange} value={this.state.title} />
        <h2>Content</h2>
        <input onChange={this.onContentChange} value={this.state.content} />
        <h2>Tags</h2>
        <input onChange={this.onTagsChange} value={this.state.tags} />
        <h2>Cover url</h2>
        <input onChange={this.onCoverURLChange} value={this.state.coverURL} />
        <button onClick={this.onButtonClick}>CREATE NEW POST</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));
