"use client";
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [series, setSeries] = useState([44, 55, 13, 33]);
  const [options] = useState({
    chart: {
      width: 100,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 100
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 100,
    }
  });

  

 

  return (
    <div>
      <div>
        <div className="chart-wrap">
          <div id="chart">
            <ReactApexChart options={options} hideSer series={series} type="donut" width={500} />
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default ApexChart;
