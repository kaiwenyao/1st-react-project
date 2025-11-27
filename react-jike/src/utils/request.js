// axios 封装
import axios from "axios";
import { getToken } from "./token";
// 根域名配置
// 超时时间
const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
});

// 拦截器
// 请求拦截
request.interceptors.request.use(
  (config) => {
    // 操作这个config
    // 获取token 拼接
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 响应拦截
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export { request };
