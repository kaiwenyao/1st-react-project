import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const pindaoStore = createSlice({
  name: "pindao",
  initialState: {
    pindaoliebiao: [],
  },
  reducers: {
    setChannels(state, action) {
      state.pindaoliebiao = action.payload;
    },
  },
});

const { setChannels } = pindaoStore.actions;
const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://geek.itheima.net/v1_0/channels");
    dispatch(setChannels(res.data.data.channels));
  };
};
export { fetchChannelList };
const reducer = pindaoStore.reducer;
export default reducer;
