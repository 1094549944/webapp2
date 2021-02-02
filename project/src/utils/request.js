import axios from 'axios'
const service = axios.create({
  timeout: 2000
})
// 请求拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent

  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});
// 返回拦截器
service.interceptors.response.use(response => {
  // Do something before response is sent

  return response;
}, error => {
  // Do something with response error
  return Promise.reject(error);
});

export default service