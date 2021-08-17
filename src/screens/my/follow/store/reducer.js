import { Map } from 'immutable';
import { CHANGE_USER_FOLLOW } from './content';
const initialState = Map({
  follow: []
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_USER_FOLLOW:
      return state.set('follow', payload);
    default:
      return state;
  }
};
