import { CHANGE_TOKEN } from './content';

import { Map } from 'immutable';
const initState = Map({
  token: ''
});
export default (state = initState, { type, payload }) => {
  switch (type) {
    case CHANGE_TOKEN:
      return state.set('token', payload);

    default:
      return state;
  }
};
