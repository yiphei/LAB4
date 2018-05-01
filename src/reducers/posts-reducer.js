import { ActionTypes } from '../actions';

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
      const newpost = action.payload;
      return Object.assign({}, state, { all: [...state.all, newpost] });
    default:
      return state;
  }
};

export default PostsReducer;
