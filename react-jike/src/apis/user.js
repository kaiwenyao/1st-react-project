// 用户相关的所有请求
import { request } from "@/utils";
// 登录请求

export const loginAPI = (formData) => {
  // 这里是axios通用写法
  return request({
    url: "/authorizations",
    method: "POST",
    data: formData,
  });
};

// 获取用户信息
export const getProfileAPI = () => {
  return request({
    url: "/user/profile",
    method: "GET",
  });
};
