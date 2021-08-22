import { Map } from 'immutable';
import { UPDATE_ORDER } from './content';
const initialState = Map({ orider: [] });

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_ORDER:
      return state.set('orider', payload);
    default:
      return state;
  }
};
