import { configureStore } from "@reduxjs/toolkit";

// 导入子模块 reducer
import conterReducer from "./modules/counterStore";
import channelReducer from "./modules/channelStore";

const store = configureStore({
  reducer: {
    counter: conterReducer,
    pindao: channelReducer,
  },
});

export default store;
