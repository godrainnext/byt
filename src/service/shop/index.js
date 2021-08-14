import request from '../index';

export const getShopList = (offset = 0, top = 5) =>
  request.get({
    url: '/shop',
    params: {
      offset,
      top
    }
  });

export const getShopInfo = (shopId) =>
  request.get({
    url: `/shop/getShopById/${shopId}`
  });
export const getShopListByStatus = (status, offset = 0, top = 5) =>
  request.get({
    url: `/shop/getShopList/${status}`,
    params: {
      offset,
      top
    }
  });

export const addOrider = (data) => request.post({ url: `user/orider`, data });
