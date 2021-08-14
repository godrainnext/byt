import axios from 'axios';

class JLRequest {

  constructor(config) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    //从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    //添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (res) => {
  
        return res;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
 
        const data = res.data;

        return data;
      },
      (err) => {
        return err;
      }
    );
  }
  requset(config) {
    return new Promise((resolve, rejecj) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          rejecj(err);
        });
    });
  }
  get(config){
    return this.requset({ ...config, method: 'GET' });
  }
  post(config) {
    return this.requset({ ...config, method: 'POST' });
  }
  delete(config) {
    return this.requset({ ...config, method: 'DELETE' });
  }
  patch(config) {
    return this.requset({ ...config, method: 'PATCH' });
  }
}

export default JLRequest;
