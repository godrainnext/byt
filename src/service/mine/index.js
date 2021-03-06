import request from '../index';
export const getUserAddress = () => request.get({ url: '/user/address' });
export const deleteAddress = (addressId) =>
  request.delete({ url: `/user/address/${addressId}` });
export const getUserFollow = () => request.get({ url: '/user/follow' });
export const getUserFans = () => request.get({ url: '/user/fans' });
export const cancelFollow = (id) =>
  request.delete({ url: `/user/follow/${id}` });
export const addFollow = (id) => request.post({ url: `/user/follow/${id}` });
export const getUserInfoById = (id) =>
  request.get({ url: `/user/userInfoById/${id}` });

export const apply = (fd) =>
  request.post({ url: `/user/applySteam`, data: fd });
export const changeOriderStatus = (id, status) =>
  request.patch({ url: `/user/orider/${id}?status=${status}` });
export const deleteOrider = (id) =>
  request.delete({ url: `/user/orider/${id}` });
