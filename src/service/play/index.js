import request from '../index';

export const saveMusic = (data) =>
  request.post({ url: '/uploads/music', data });
