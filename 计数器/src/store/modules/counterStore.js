import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  // 初始化state
  initialState: {
    count: 0,
  },
  // 修改数据的方法 同步方法 支持直接修改
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToNum(state, action) {
      state.count += action.payload;
    },
  },
});
// 结构出来action creator函数
const { increment, decrement, addToNum } = counterStore.actions;
// 获取reducer
const reducer = counterStore.reducer;

// 按需导出
export { increment, decrement, addToNum };
// 默认导出
export default reducer;
