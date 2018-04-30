// import axios from 'axios';
//
// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
// const API_KEY = '?key=yifei_yan';


// // keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // CREATE_POST: 'CREATE_POST',
  // DELETE_POST: 'DELETE_POST',
};


// export function fetchPosts() {
//   axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
//   // do something with response.data  (some json)
//     const posts = response.data;
//     dispatch({
//       type: ActionTypes.FETCH_POSTS,
//       payload: posts,
//     });
//   }).catch((error) => {
//   // hit an error do something else!
//     console.log('error');
//     dispatch({
//       type: ActionTypes.FETCH_POSTS,
//       payload: null,
//     });
//   });
// }

export function fetchPosts() {
  return {
    type: ActionTypes.FETCH_POSTS,
    payload: null,
  };
}

export function fetchPost(id) {
  return {
    type: ActionTypes.FETCH_POST,
    payload: id,
  };
}


//
// export function createPost(post, history) { /* axios post */ }
//
// export function updatePost(post) { /* axios put */ }
//
// export function deletePost(id, history) { /* axios delete */ }
