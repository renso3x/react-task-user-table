import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

const getData = (data, filterBy) =>
  data.reduce((acc, val) => {
    if (val.gender === filterBy) {
      acc += 1;
    }
    return acc;
  }, 0);

const UserBarChart = ({ users }) => {
  const maleData = getData(users, 'male');
  const femaleData = getData(users, 'female');

  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: 'Users',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [maleData, femaleData],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return <Bar data={data} width={100} height={50} options={options} />;
};

UserBarChart.propTypes = {
  users: PropTypes.array,
};

export default UserBarChart;
