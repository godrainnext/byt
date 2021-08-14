import request from '../index';

export const getUserInfo = () => request.get({ url: '/user' });
export const getUserOriderList = () => request.get({ url: '/user/oriderList' });
export const getListByStatus = (status, offset = 0, top = 5) =>
  request.get({
    url: `/moment/getListByStatus/${status}?offert=${offset}&size=${top}`
  });
export const getMomentById = (id) =>
  request.get({ url: `/moment/detailbymomentid/${id}` });
