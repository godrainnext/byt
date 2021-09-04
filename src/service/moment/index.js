import request from '../index';
export const getMomentListByStatus = (status, offset = 0, top = 5) =>
  request.get({
    url: `/moment/detaillistbyStatus/${status}?offset=${offset}&size=${top}`
  });

export const getMomentInnerById = (momentId) =>
  request.get({
    url: `/moment/detailbymomentid/${momentId}`
  });
export const getCommentInnerById = (id) =>
  request.get({ url: `/comment/${id}` });

export const getMomentListByUserId = (id) =>
  request.get({ url: `/moment/getUserMomentById/${id}` });
export const getMomentListByTagId = (id) =>
  request.get({ url: `/moment/listByTag/${id}` });
export const addTag = (id, tags) =>
  request.post({ url: `/moment/${id}/momentTags`, data: { tags } });
