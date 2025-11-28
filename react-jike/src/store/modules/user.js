// 用户相关的状态管理

import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken, removeToken } from "@/utils";
import { loginAPI, getProfileAPI } from "@/apis/user";
const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "",
    userInfo: {},
  },
  // 同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      // 本地存储token
      _setToken(action.payload);
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    clearUserInfo(state) {
      state.token = "";
      state.userInfo = {};
      removeToken();
    },
  },
});

// 解构出action creator
const { setToken, setUserInfo, clearUserInfo } = userStore.actions;

// 获取reducer函数
const userReducer = userStore.reducer;
// 异步方法 完成登录 获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 发送异步请求
    const res = await loginAPI(loginForm);
    // 提交同步aciton进行数据写入
    dispatch(setToken(res.data.token));
  };
};
// 获取个人用户信息 异步方法
const fetchUserInfo = () => {
  return async (dispatch) => {
    // 发送异步请求
    const res = await getProfileAPI();
    // 提交同步aciton进行数据写入
    dispatch(setUserInfo(res.data));
  };
};

export { fetchLogin, fetchUserInfo, clearUserInfo };
export default userReducer;
