import { Map } from 'immutable';
import { UPDATE_ADDRESS, DELTE_ADDRESS } from './content';
const State = Map({ address: [] });

export default (state = State, { type, payload }) => {
  switch (type) {
    case UPDATE_ADDRESS:
      return state.update('address', (x) => [...x, ...payload]);
    case DELTE_ADDRESS:
      return state.update('address', (x) =>
        x.filter((item) => item.id !== payload.id)
      );
    default:
      return state;
  }
};
