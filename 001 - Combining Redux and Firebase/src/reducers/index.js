import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
