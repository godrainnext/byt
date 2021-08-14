import { CHANGE_AVATAR } from './content';

import { Map } from 'immutable';
const initState = Map({
  avatar: ''
});
export default (state = initState, { type, payload }) => {
  switch (type) {
    case CHANGE_AVATAR:
      return state.set('avatar', payload);

    default:
      return state;
  }
};
