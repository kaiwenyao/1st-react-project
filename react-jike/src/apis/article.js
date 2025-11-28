// 封装文章相关的接口
import { request } from "@/utils";
// 频道列表

export const getChannelAPI = () => {
  // 这里是axios通用写法
  return request({
    url: "/channels",
    method: "GET",
  });
};
// 提交文章表单
export const createArticleAPI = (data) => {
  return request({
    url: "/mp/articles?draft=false",
    method: "POST",
    data,
  });
};
export const getArticleListAPI = (params) => {
  return request({
    url: "/mp/articles",
    method: "GET",
    params,
  });
};
// 删除
export const deleteArticleAPI = (id) => {
  return request({
    url: `/mp/articles/${id}`,
    method: "DELETE",
  });
};
