// import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../actions/index';
import { uploadImage } from '../actions/s3';


class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      tags: '',
      coverURL: '',
      preview: '',
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
      if (this.state.file) {
        uploadImage(this.state.file).then((url) => {
          // use url for content_url and
          // either run your createPost actionCreator
          // or your updatePost actionCreator
          const fields = {
            title: this.state.title, tags: this.state.tags, content: this.state.content, cover_url: url,
          };
          console.log('HERE');
          this.props.createPost(fields, this.props.history);
        }).catch((error) => {
          // handle error
          console.log('error in newpost');
        });
      }
    }
  }

  onImageUpload = (event) => {
    const file = event.target.files[0];
    // Handle null file
    // Get url of the file and set it to the src of preview
    if (file) {
      this.setState({ preview: window.URL.createObjectURL(file), file });
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
        <img id="preview" alt="preview" src={this.state.preview} />
        <input type="file" name="coverImage" onChange={this.onImageUpload} />
        <button onClick={this.onButtonClick}>SUBMIT</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));
