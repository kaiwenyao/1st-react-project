// 用户相关的状态管理

import { createSlice } from "@reduxjs/toolkit";
import { request, setToken as _setToken, getToken } from "@/utils";
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
  },
});

// 解构出action creator
const { setToken, setUserInfo } = userStore.actions;

// 获取reducer函数
const userReducer = userStore.reducer;
// 异步方法 完成登录 获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 发送异步请求
    const res = await request.post("/authorizations", loginForm);
    // 提交同步aciton进行数据写入
    dispatch(setToken(res.data.token));
  };
};
// 获取个人用户信息 异步方法
const fetchUserInfo = () => {
  return async (dispatch) => {
    // 发送异步请求
    const res = await request.get("/user/profile");
    // 提交同步aciton进行数据写入
    dispatch(setUserInfo(res.data));
  };
};

export { fetchLogin, setToken, fetchUserInfo };
export default userReducer;
