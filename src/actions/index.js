import axios from 'axios';

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const ROOT_URL = 'https://git.heroku.com/lab4cs52.git';

// // keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
};


export function updatePost(id, fields) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}`, fields).then((response) => {
    // do something with response.data  (some json)
      console.log(response);
      const updated = response.data;
      dispatch({
        type: ActionTypes.FETCH_POST,
        payload: updated,
      });
    }).catch((error) => {
    // hit an error do something else!
      console.log('error');
    });
  };
}


export function deletePost(id, history) {
  axios.delete(`${ROOT_URL}/posts/${id}`).then((response) => {
    // do something with response.data  (some json)
    history.push('/');
  }).catch((error) => {
    // hit an error do something else!
    console.log('error');
  });
}


export function createPost(fields, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts`, fields).then((response) => {
      // do something with response.data  (some json)
      const newpost = response.data;
      history.push('/');
      dispatch({
        type: ActionTypes.CREATE_POST,
        payload: newpost,
      });
    }).catch((error) => {
      // hit an error do something else!
      console.log('error');
      dispatch({
        type: ActionTypes.CREATE_POST,
        payload: null,
      });
    });
  };
}


export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts`).then((response) => {
      // do something with response.data  (some json)
      const posts = response.data;
      dispatch({
        type: ActionTypes.FETCH_POSTS,
        payload: posts,
      });
    }).catch((error) => {
      // hit an error do something else!
      console.log('error');
      dispatch({
        type: ActionTypes.FETCH_POSTS,
        payload: null,
      });
    });
  };
}


export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}`).then((response) => {
      // do something with response.data  (some json)
      const post = response.data;
      dispatch({
        type: ActionTypes.FETCH_POST,
        payload: post,
      });
    }).catch((error) => {
      // hit an error do something else!
      console.log('error');
      dispatch({
        type: ActionTypes.FETCH_POST,
        payload: null,
      });
    });
  };
}
