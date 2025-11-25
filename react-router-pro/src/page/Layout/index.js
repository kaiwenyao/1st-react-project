import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {" "}
      一级路由Layout组件
      <Link to="/">面板</Link>
      <Link to="/about">关于</Link>
      {/* 二级路由出口 */}
      <Outlet />
    </div>
  );
};

export default Layout;
