import { CHANGE_USER_INFO, UPDATE_ORDER } from './content';
import { getUserInfo, getUserOriderList } from '@service/home';

export const changeOrder = (payload) => ({
  payload,
  type: UPDATE_ORDER
});

export const changeUserInfo = (payload) => ({
  payload,
  type: CHANGE_USER_INFO
});
export const getUserInfoAction = () => (dispatch) => {
  getUserInfo().then((res) => {
    dispatch(changeUserInfo(res));
  });
};
export const getUserOriderListAction = () => (dispatch, getstate) => {
  getUserOriderList().then((res) => {
    if (res.oriderList) {
      dispatch(changeOrder(res.oriderList));
    } else {
      dispatch(changeOrder([]));
    }
  });
};
