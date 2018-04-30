import { ActionTypes } from '../actions';

// const CountReducer = (state = 0, action) => {
//   switch (action.type) {
//     case ActionTypes.INCREMENT:
//       return state + 1;
//     case ActionTypes.DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// };


const PostsReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return state + 1;
    case ActionTypes.FETCH_POST:
      return state - 1;
    default:
      return state;
  }
};

export default PostsReducer;
