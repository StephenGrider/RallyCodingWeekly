import { combineReducers } from 'redux';
import posts from 'reducers/reducer_posts';
import selectedPostIds from 'reducers/reducer_selected_posts';

const rootReducer = combineReducers({
  posts,
  selectedPostIds
});

export default rootReducer;
