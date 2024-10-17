// RadarChart.js
import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels: ['Strength', 'Speed', 'Endurance', 'Agility', 'Intelligence'],
    datasets: [
      {
        label: 'Player A',
        data: [65, 59, 90, 81, 56],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Player B',
        data: [28, 48, 40, 19, 96],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Player Skill Comparison',
      },
    },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
