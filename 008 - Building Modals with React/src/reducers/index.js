import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  colors: () => ['red', 'blue', 'green']
});

export default rootReducer;
