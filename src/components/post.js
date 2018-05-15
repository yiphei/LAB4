import marked from 'marked';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
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
  };

  onDeleteClick = () => {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  onUpdateClick = () => {
    console.log('updated');
    this.setState({ isEditing: false });
    const fields = {
      title: this.state.title, tags: this.state.tags, content: this.state.content, cover_url: this.state.coverURL,
    };
    this.props.updatePost(this.props.match.params.postID, fields);
  }

  onEditClick = () => {
    this.setState({ isEditing: true });
    this.setState({
      title: this.props.post.title,
      content: this.props.post.content,
      tags: this.props.post.tags,
      coverURL: this.props.post.cover_url,
    });
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
        <div className="singlePost-detail">
          <div className="top-bar">
            <div><NavLink exact to="/">Back to index</NavLink></div>
            <div className="functions">
              <button className="editB" onClick={this.onEditClick}>Edit</button>
              <button className="deleteB" onClick={this.onDeleteClick}>Delete</button>
            </div>
          </div>
          <div className="singlePostbody">
            <img src={this.props.post.cover_url} alt="a cover" />
            <div className="post-title" dangerouslySetInnerHTML={{ __html: marked(this.props.post.title || '') }} />
            <div className="post-content" dangerouslySetInnerHTML={{ __html: marked(this.props.post.content || '') }} />
            <div className="post-tags" dangerouslySetInnerHTML={{ __html: marked(this.props.post.tags || '') }} />
            <div className="post-author">by {this.props.post.username}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="singlePost-detail">
          <div className="top-bar">
            <div><NavLink exact to="/">Back to index</NavLink></div>
            <div className="functions">
              <button className="editB" onClick={this.onUpdateClick}>Update</button>
              <button className="deleteB" onClick={this.onDeleteClick}>Delete</button>
            </div>
          </div>
          <div className="singlePostbody">
            <input className="edit-element" onChange={this.onCoverURLChange} value={this.state.coverURL} />
            <input className="edit-element" onChange={this.onTitleChange} value={this.state.title} />
            <textarea name="Text1" cols="40" rows="5" className="edit-element" onChange={this.onContentChange} value={this.state.content} />
            <input className="edit-element" onChange={this.onTagsChange} value={this.state.tags} />
          </div>
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

// <input className="edit-element" onChange={this.onContentChange} value={this.state.content} />
