import request from '../../index';
export const getRoleList = () => request.get({ url: 'role/roleList' });
export const getRoleVideoById = (id) =>
  request.get({ url: `/role/roleInnerVideo/${id}` });
export const getRoleMomentById = (id) =>
  request.get({ url: `/role/roleInnerMoment/${id}` });
export const getRolePicById = (id) =>
  request.get({ url: `/role/roleInnerPic/${id}` });
