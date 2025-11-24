import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const foodsStore = createSlice({
  name: "foods",
  initialState: {
    // 商品列表
    foodsList: [],
    // 菜单激活下标值
    activeIndex: 0,
    // 购物车 列表
    cartList: [],
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    },
    // 更改activeIndex
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    // 添加购物车
    addCart(state, action) {
      // 是否添加过 添加过就++
      // 通过aciton.payload.id 去匹配
      const item = state.cartList.find((item) => item.id === action.payload.id);
      // 如果没有 item会被赋值为undefined
      if (item) {
        item.count++;
      } else {
        state.cartList.push(action.payload);
      }
    },
    // count 增加
    increCount(state, action) {
      // 关键：找到当前修改谁
      const item = state.cartList.find((item) => item.id === action.payload.id);
      item.count++;
    },
    // count减少
    decreCount(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id);
      if (item.count === 0) {
        return;
      }
      item.count--;
    },
    // 清除购物车
    clearCart(state) {
      state.cartList = [];
    },
  },
});
const {
  setFoodsList,
  changeActiveIndex,
  addCart,
  increCount,
  decreCount,
  clearCart,
} = foodsStore.actions;
// 异步获取部分
const fetchFoodsList = () => {
  return async (dispatch) => {
    // 编写异步逻辑
    const res = await axios.get("http://localhost:3004/takeaway");
    // 调用dispatch函数提交action
    dispatch(setFoodsList(res.data));
  };
};
export {
  fetchFoodsList,
  changeActiveIndex,
  addCart,
  increCount,
  decreCount,
  clearCart,
};

const reducer = foodsStore.reducer;
export default reducer;
