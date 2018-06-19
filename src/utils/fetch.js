import axios from 'axios';
// import store from '../store';

const baseUrl = 'http://localhost:3000/'
// 创建axios实例
const service = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
  interceptors: true  // 是否开启response拦截器
  /*   timeout: 5000 // 请求超时时间*/
});

export default service;
