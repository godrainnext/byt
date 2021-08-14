import { Map } from 'immutable';
import { CHANGE_USER_INFO } from './content';
const initialState = Map({
  userInfo: {}
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_USER_INFO:
      return state.set('userInfo', payload);
    default:
      return state;
  }
};
