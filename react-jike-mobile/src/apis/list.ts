import { http } from "@/utils";
import type { ResType } from "./shared";

// 定义具体的接口返回值
type ChannelItem = {
  id: number;
  name: string;
};

type ChannelRes = {
  channels: ChannelItem[];
};

// 请求频道列表
export const fetchChannelAPI = () => {
  return http.request<ResType<ChannelRes>>({
    url: "/channels",
    method: "GET",
  });
};
