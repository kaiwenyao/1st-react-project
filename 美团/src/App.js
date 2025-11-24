import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import FoodsCategory from "./components/FoodsCategory";
import { fetchFoodsList } from "./store/modules/takeaway";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.scss";

const App = () => {
  // 触发action执行
  // 用到钩子函数 useDispatch
  // 导入actionCreator进来 fetchFoodsList
  // useEffect 触发
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoodsList());
  }, [dispatch]);
  // 获取foodsList渲染数据
  // useSelector
  const { foodsList, activeIndex } = useSelector((state) => state.foods);
  // 解构赋值 拿出来数据列表 但是这里只有一个变量就是foodsList
  return (
    <div className="home">
      {/* 导航 */}
      <NavBar />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              {foodsList.map((item, index) => {
                return (
                  activeIndex === index && (
                    <FoodsCategory
                      key={item.tag}
                      // 列表标题
                      name={item.name}
                      // 列表商品
                      foods={item.foods}
                    />
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */}
      <Cart />
    </div>
  );
};

export default App;
