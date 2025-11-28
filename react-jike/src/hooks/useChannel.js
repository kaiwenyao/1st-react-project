import { useState, useEffect } from "react";
import { getChannelAPI } from "@/apis/article";
// 自定义hook 以use开头
// 封装获取频道列表的逻辑
const useChannel = () => {
  // 获取频道列表的逻辑
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    // 调用接口获取频道列表
    const getChannelList = async () => {
      const res = await getChannelAPI();
      setChannelList(res.data.channels);
    };
    getChannelList();
  }, []);
  // 把数据return出去
  return {
    channelList,
  };
};

export { useChannel };
