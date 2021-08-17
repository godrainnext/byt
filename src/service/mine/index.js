import requset from '../index';
export const getUserAddress = () => requset.get({ url: '/user/address' });
export const deleteAddress = (addressId) =>
  requset.delete({ url: `/user/address/${addressId}` });
export const getUserFollow = () => requset.get({ url: '/user/follow' });
export const getUserFans = () => requset.get({ url: '/user/fans' });
export const cancelFollow = (id) =>
  requset.delete({ url: `/user/follow/${id}` });
