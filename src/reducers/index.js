import { combineReducers } from 'redux';

import PostsReducer from './posts-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
});

// const rootReducer = combineReducers({
//   posts: PostsReducer,
// });

export default rootReducer;
