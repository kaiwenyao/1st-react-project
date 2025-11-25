import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      我是登录页面
      {/* 声明式写法 */}
      <Link to="/article"> 跳转到文章页面 </Link>
      {/* 命令式写法 */}
      <button onClick={() => navigate("/article")}> 跳转到文章</button>
      <button onClick={() => navigate("/article?id=101&name=jack")}> chuancan</button>
      <button onClick={() => navigate("/article/1011")}> params chuancan</button>
    </div>
  );
};

export default Login;
