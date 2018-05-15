import axios from 'axios';

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const ROOT_URL = 'https://lab4cs52.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';

// // keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};


export function updatePost(id, fields) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}`, fields, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
    // do something with response.data  (some json)
      console.log(response);
      dispatch({
        type: ActionTypes.FETCH_POST,
        payload: fields, // i put fields here instead of const updated because the backend does not return the updated post
      });
    }).catch((error) => {
    // hit an error do something else!
      console.log('error');
    });
  };
}


export function deletePost(id, history) {
  axios.delete(`${ROOT_URL}/posts/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
    // do something with response.data  (some json)
    history.push('/');
  }).catch((error) => {
    // hit an error do something else!
    console.log('error');
  });
}


export function createPost(fields, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts`, fields, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
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

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}


export function signinUser({ email, password }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));

  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password }).then((response) => {
      history.push('/');
      dispatch({
        type: ActionTypes.AUTH_USER,
      });
      localStorage.setItem('token', response.data.token);
    }).catch((error) => {
      // hit an error do something else!
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}


export function signupUser({ username, email, password }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));

  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { username, email, password }).then((response) => {
      history.push('/');
      dispatch({
        type: ActionTypes.AUTH_USER,
      });
      localStorage.setItem('token', response.data.token);
    }).catch((error) => {
      // hit an error do something else!
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}


// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}
