import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

// 柱状图

const BarChart = ({ title }) => {
  const chartRef = useRef();
  useEffect(() => {
    // 保证 dom可用 才进行图标渲染
    const chartDom = chartRef.current;
    // 初始化 生成对象
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: title,
      },
      xAxis: {
        type: "category",
        data: ["vue", "react", "angular"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [10, 40, 70],
          type: "bar",
        },
      ],
    };
    option && myChart.setOption(option);
  }, [title]);
  return <div ref={chartRef} style={{ width: "500px", height: "400px" }}></div>;
};

export default BarChart;
