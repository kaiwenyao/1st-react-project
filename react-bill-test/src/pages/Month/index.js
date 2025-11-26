import { NavBar, DatePicker } from "antd-mobile";
import "./index.scss";
import { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import _ from "lodash";
import DailyBill from "./components/DayBill";
const Month = () => {
  // 按月做数据的分组
  const billList = useSelector((state) => state.bill.billList);
  // 这里的billList列表是通过Layout组件中的getBillList进行了获取
  const monthGroup = useMemo(() => {
    // return 出去计算之后的值
    return _.groupBy(billList, (item) => dayjs(item.date).format("YYYY-MM"));
  }, [billList]);
  // console.log(monthGroup);
  // 控制弹窗的打开和关闭
  const [dateVisible, setDateVisible] = useState(false);
  // 控制日期显示
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format("YYYY-MM");
  });
  const [currentMonthList, setCurrentMonthList] = useState([]);
  const monthResult = useMemo(() => {
    // 支出 / 收入 / 结余
    const pay = currentMonthList
      .filter((item) => item.type === "pay")
      .reduce((a, c) => a + c.money, 0);
    const income = currentMonthList
      .filter((item) => item.type === "income")
      .reduce((a, c) => a + c.money, 0);
    return {
      pay,
      income,
      total: pay + income,
    };
  }, [currentMonthList]);
  // 日期选择器的确认回调
  const onConfirm = (date) => {
    setDateVisible(false);
    // 其他逻辑
    // console.log(date);
    const formatDate = dayjs(date).format("YYYY-MM");
    setCurrentMonthList(monthGroup[formatDate]);
    setCurrentDate(formatDate);
    // 注意：
    // 这里的currentMonthList是通过setCurrentMonthList进行设置的
    // 当调用setCurrentMonthList函数之后，这个函数并不会立即更新值
    // 也就是说 这是一个异步操作！！！如果在这里直接log 会导致无法log出最新的值
    // 解决方案是用useEffect 进行log
  };
  // useEffect(() => {
  //   console.log(currentMonthList);
  // }, [currentMonthList])

  // 当前月 按日分组
  const dayGroup = useMemo(() => {
    // return 出去计算之后的值
    const groupData = _.groupBy(currentMonthList, (item) =>
      dayjs(item.date).format("YYYY-MM-DD")
    );
    // 所有的日 组成一个新的数组列表

    const keys = Object.keys(groupData);

    return {
      groupData,
      keys,
    };
  }, [currentMonthList]);

  // 初始化的时候把当前月份的数据渲染出来
  useEffect(() => {
    const nowDate = dayjs().format("YYYY-MM");
    if (monthGroup[nowDate]) {
      setCurrentMonthList(monthGroup[nowDate]);
    }
  }, [monthGroup]);
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">{currentDate + ""}月账单</span>
            {/* 根据类名 控制箭头上下 expand */}
            <span
              className={classNames("arrow", dateVisible && "expand")}
            ></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            onCancel={() => setDateVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          />
        </div>
        {/* 单日列表统计 */}
        {dayGroup.keys.map((key) => {
          return (
            <DailyBill
              key={key}
              date={key}
              billList={dayGroup.groupData[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Month;
