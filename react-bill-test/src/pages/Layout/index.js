import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "antd-mobile";
import { useDispatch } from "react-redux";
import { getBillList } from "@/store/modules/billStore";
const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);
  return (
    <div>
      <Outlet />
      Layout
      {/* 测试全局配置 */}
      <Button color="primary">test global</Button>
      <div className="purple">
        <Button color="primary">test local</Button>
      </div>
    </div>
  );
};

export default Layout;
