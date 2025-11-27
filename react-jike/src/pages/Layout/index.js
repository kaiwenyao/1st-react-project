import React, { useEffect } from "react";
import { request } from "@/utils";
export const Layout = () => {
  useEffect(() => {
    request.get("/user/profile");
  }, []);
  return <div>Layout</div>;
};
export default Layout;
