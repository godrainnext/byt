//service同意出口
import JLRequest from './requset';

import { TIME_OUT, BASE_URL } from './requset/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default new JLRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    async requestInterceptor(config) {
      //可以在这里添加这个请求的token
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    requestInterceptorCatch(err) {
      return err;
    },
    responseInterceptor(config) {
      return config;
    },
    responseInterceptorCatch(err) {
      return err;
    }
  }
});
