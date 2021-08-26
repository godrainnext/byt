import request from '../index';

export const saveMusic = (data) =>
  request.post({ url: '/uploads/music', data });
export const getMusicById = (id) =>
  request.get({ url: `/uploads/staticmusicById/${id}` });
