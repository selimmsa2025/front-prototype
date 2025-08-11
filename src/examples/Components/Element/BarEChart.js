import ECharts, { EChartsReactProps } from 'echarts-for-react';
import React, { useEffect, useState } from 'react';

const getRandomRgba = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = (Math.random() * (1 - 0.6) + 0.6).toFixed(1); // alpha 값은 0.6에서 1 사이의 랜덤값

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const BarEChart = ({ chartData }) => {
  const labels = [];
  const datas = [];
  if (chartData) {
    chartData.forEach((v, i) => {
      labels.push(v.label);
      datas.push(v.value);
    });
  }

  const [options, setOptions] = useState({
    xAxis: {
      type: 'value',
      max: 100,
    },
    yAxis: {
      type: 'category',
      data: labels,
    },
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 10,
      max: 100,
      text: ['High Score', 'Low Score'],
      dimension: 0,
      inRange: {
        color: ['#65B581', '#FFCE34', '#FD665F'],
      },
    },
    series: [
      {
        data: datas,
        type: 'bar',
        itemStyle: {
          color: ['lightgray'],
        },
        barWidth: 15,
      },
    ],
    grid: {
      left: '5%',
      right: '5%',
      bottom: '25%',
      top: '5%',
    },
    tooltip: {
      trigger: 'item',
      position: function (point, params, dom, rect, size) {
        console.log(params);
        return [point[0], point[1] - 50];
      },
    },
  });

  return (
    <ECharts
      option={options}
      opts={{ renderer: 'svg', width: 'auto', height: 'auto' }}
    />
  );
};

export default BarEChart;
