import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Home() {
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [10,20,30,40],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data:[20,40,50,21],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  return (
    <div>
        <div className=" heading pt-4 pb-4">
      <h4>Hi, welcome back!</h4>
      <h10>MARCH 12,2023</h10>
    </div>
    <div class="container All ">
  <div class="row ">

    <div class="col-md-3">
    <div class="container cards">
  <div class="row ">

    <div class="col-md-12">
    <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
            <h5 className="card-title">Customers</h5>
            <p className="card-text">23% increase in <br></br> conversion</p>
            <h2>43,981</h2>
            </div>
      </div>
    </div>

    <div class="col-md-12">
    <div className="card mt-2" style={{width: "18rem"}}>
            <div className="card-body">
            <h5 className="card-title">Orders</h5>
            <p className="card-text">6% decrease in earnings</p>
            <h2>55,543</h2>

            </div>
      </div>
    </div>

  </div>
</div>
    
    </div>

    <div class="new col-md-9">
    <div className="card" style={{width: "80%", height: "100%"}}>
            <div className="card-body">
            <div class="container">
  <div class="row ">

    <div class="col-md-12">
    <div class=" container">
  <div class="row ">

    <div class=" col-lg-6 col-md-6">
    <h5 className="card-title">Website Audience Metrics</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, <br></br> consectetur adipisicing elit amet <br></br> cumque cupiditate</p>
    </div>

    <div class="col-lg-2 col-md-6">
      <h4>83,123</h4>
      <h7>Sessions</h7>
    </div>

    <div class="col-lg-2 col-md-6">
    <h4>3,333</h4>
      <h7>New Users</h7>
    </div>

    <div class="col-lg-2 col-md-6">
    <h4>16,869</h4>
      <h7>page Views</h7>
    </div>

  </div>
</div>
    </div>

    <div class="col-md-12" style={{width: "100%"}}>
    <Bar options={options} data={data} />
    </div>

  </div>
</div>
            

            </div>
      </div>
    </div>

  </div>
</div>

    </div>
  )
}

export default Home
