import { Image, InfiniteScroll, List } from "antd-mobile";
// mock数据
import { useEffect, useState } from "react";
import { fetchListAPI, type ListRes } from "@/apis/list";
type Props = {
  channelId: string;
};
const HomeList = (props: Props) => {
  const { channelId } = props;
  // 获取列表数据
  const [listRes, setListRes] = useState<ListRes>({
    results: [],
    pre_timestamp: "" + new Date().getTime(),
  });
  // 开关 标记目前是否还有新数据
  const [hasMore, setHasMore] = useState(true);
  // 加载下一页的函数
  const loadMore = async () => {
    // 加载下一页
    console.log("加载");
    try {
      const res = await fetchListAPI({
        channel_id: channelId,
        timestamp: listRes.pre_timestamp,
      });
      setListRes({
        results: [...listRes.results, ...res.data.data.results],
        pre_timestamp: res.data.data.pre_timestamp,
      });
      if (res.data.data.results.length === 0) {
        setHasMore(false)
      }
    } catch {
      throw new Error("fecth List error!!");
    }
  };
  useEffect(() => {
    const getList = async () => {
      try {
        const res = await fetchListAPI({
          channel_id: channelId,
          timestamp: "" + new Date().getTime(),
        });
        setListRes({
          results: res.data.data.results,
          pre_timestamp: res.data.data.pre_timestamp,
        });
      } catch {
        throw new Error("fecth List error!!");
      }
    };
    getList();
  }, [channelId]);
  return (
    <>
      <List>
        {listRes.results.map((item) => (
          <List.Item
            key={item.art_id}
            prefix={
              <Image
                src={item.cover.images?.[0]}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={item.pubdate}
          >
            {item.title}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={10} />
    </>
  );
};

export default HomeList;
