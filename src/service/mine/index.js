import requset from '../index';
export const getUserAddress = () => requset.get({ url: '/user/address' });
export const deleteAddress = (addressId) =>
  requset.delete({ url: `/user/address/${addressId}` });
