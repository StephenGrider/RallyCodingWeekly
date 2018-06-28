import _ from 'lodash';
import {
  SELECT_POST,
  DESELECT_POST
} from 'actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case SELECT_POST:
      return [ ...state, action.payload ];
    case DESELECT_POST:
      return _.without(state, action.payload);
  }

  return state;
}
