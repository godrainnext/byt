import { UPDATE_ADDRESS, DELTE_ADDRESS } from './content';
import { getUserAddress } from '@service/mine';

export const updateAddress = (payload) => ({
  payload,
  type: UPDATE_ADDRESS
});

export const deleteAddressAction = (payload) => ({
  payload,
  type: DELTE_ADDRESS
});

export const getAddressListAction = () => (dispatch, getstate) => {
  getUserAddress().then((res) => {
    if (res.address.length) {
      dispatch(updateAddress(res.address));
    } else {
      dispatch(updateAddress([]));
    }
  });
};
