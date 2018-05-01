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

const initialState = {
  all: [],
  post: {},
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      const posts = action.payload;
      return Object.assign({}, state, { all: posts });
    case ActionTypes.FETCH_POST:
      const post = action.payload;
      return Object.assign({}, state, { post });
    case ActionTypes.CREATE_POST:
      return null;
    default:
      return state;
  }
};

export default PostsReducer;
