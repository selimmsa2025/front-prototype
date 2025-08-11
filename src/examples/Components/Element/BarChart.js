import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const getRandomRgba = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = (Math.random() * (1 - 0.6) + 0.6).toFixed(1); // alpha 값은 0.6에서 1 사이의 랜덤값

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const BarChart = ({ chartData }) => {
  const labels = [];
  const datas = [];
  if (chartData) {
    chartData.forEach((v, i) => {
      labels.push(v.label);
      datas.push(v.value);
    });
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: '',
        data: datas,
        backgroundColor: ['lightgray'],
        borderColor: ['lightgray'],
        borderWidth: 1,
        barThickness: 15, // 막대의 두께를 조절
      },
    ],
  };

  const options = {
    indexAxis: 'y', // 가로 막대 그래프 설정
    responsive: true,
    maintainAspectRatio: false, // 차트의 높이를 조절하기 위해 false로 설정
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += context.raw + '%';
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100, // x축의 최대값을 100으로 설정
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 100, // y축의 최대값을 100으로 설정
        barPercentage: 2, // 막대 그래프 간의 간격 조절
        categoryPercentage: 2, // 카테고리 간의 간격 조절
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
