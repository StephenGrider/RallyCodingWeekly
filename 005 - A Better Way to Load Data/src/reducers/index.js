import { combineReducers } from 'redux';
import photos from './photos_reducer';

const rootReducer = combineReducers({
  photos
});

export default rootReducer;
