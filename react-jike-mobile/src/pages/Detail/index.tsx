import { DetailDataType, fetchDetailAPI } from "@/apis/details";
import { NavBar } from "antd-mobile";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Detail = () => {
  const [detail, setDetail] = useState<DetailDataType | null>(null);
  // 路由参数
  const [params] = useSearchParams();
  const id = params.get("id");
  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await fetchDetailAPI(id!);
        setDetail(res.data.data);
      } catch {
        throw new Error("budui");
      }
    };
    getDetail();
  }, [id]);
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  // 数据返回之前 用loading渲染
  if (!detail) {
    return <div> loading !!!</div>;
  }

  return (
    <div>
      <NavBar onBack={back}> {detail?.title}</NavBar>
      <div
        dangerouslySetInnerHTML={{
          __html: detail?.content,
        }}
      ></div>
    </div>
  );
};

export default Detail;
