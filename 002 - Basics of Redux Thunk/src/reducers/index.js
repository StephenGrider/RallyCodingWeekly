import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  users: (state = [], action) => action.payload || state
});

export default rootReducer;
