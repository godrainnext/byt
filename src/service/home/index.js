import request from '../index';

export const getUserInfo = () => request.get({ url: '/user' });
export const getUserOriderList = () => request.get({ url: '/user/oriderList' });
export const getListByStatus = (status, offset = 0, top = 5) =>
  request.get({
    url: `/moment/getListByStatus/${status}?offset=${offset}&top=${top}`
  });
export const getMomentById = (id) =>
  request.get({ url: `/moment/detailbymomentid/${id}` });

export const getVideList = (status, offset = 0, top = 5) =>
  request.get({
    url: `/video/videoListBystatus/${status}?offset=${offset}&top=${top}`
  });

export const getVideoById = (id) =>
  request.get({ url: `video/videoInnerById/${id}` });
