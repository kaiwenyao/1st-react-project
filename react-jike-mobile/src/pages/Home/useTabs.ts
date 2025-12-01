import { useState, useEffect } from "react";
import type { ChannelItem } from "@/apis/list";
import { fetchChannelAPI } from "@/apis/list";

export const useTabs = () => {
  const [channels, setChannels] = useState<ChannelItem[]>([]);
  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await fetchChannelAPI();
        setChannels(res.data.data.channels);
      } catch {
        throw new Error("fetch channel error");
      }
    };
    getChannels();
  }, []);
  return {
    channels,
  };
};
