import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { FaCar, FaDollarSign, FaBoxOpen, FaChartLine, FaRegEdit, FaPlusCircle } from "react-icons/fa"; // FontAwesome icons

// Register the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Sample Data for Car Sales Performance
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Months
    datasets: [
      {
        label: "Cars Sold",
        data: [10, 15, 18, 20, 25, 30, 40, 35, 50, 60, 70, 80], // Number of cars sold in each month
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Area under the line color
        tension: 0.4, // Smooth curve for the line
        fill: true, // Fill the area under the line
        pointRadius: 5, // Point size on the line
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
      }
    ]
  };

  // Options for the Chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Car Sales Performance",
        font: {
          size: 24
        }
      },
      tooltip: {
        mode: "index",
        intersect: false
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month"
        }
      },
      y: {
        title: {
          display: true,
          text: "Cars Sold"
        },
        beginAtZero: true
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 ml-0 sm:ml-0 md:ml-0 lg:ml-60 max-w-xs  md:max-w-7xl mx-auto min-h-screen p-6 ">
      {/* Dashboard Header */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-sm  md:text-xl lg:text-2xl font-semibold text-gray-900 mb-4">Welcome to Your Car Dashboard</h1>
        <p className="text-xs md:text-sm lg:text-lg text-gray-700">
          Monitor car stats, recent activities, and manage your car inventory from here.
        </p>
      </div>
 
         {/* Car Stats Overview Section */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:bg-blue-200 transition-all">
          <div className="flex items-center justify-between">
            <FaCar className="text-2xl md:text-3xl lg:text-4xl text-blue-600" />
            <h3 className="text-sm lg:text-sm xl:text-md font-semibold text-gray-800">Total Cars in Inventory</h3>
          </div>
          <p className="text-sm xl:text-xl font-bold text-gray-900 mt-4">125</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:bg-green-200 transition-all">
          <div className="flex items-center justify-between">
            <FaBoxOpen className="text-2xl md:text-3xl lg:text-4xl text-green-600" />
            <h3 className="text-sm   lg:text-sm xl:text-md font-semibold text-gray-800">Cars Sold This Month</h3>
          </div>
          <p className="text-sm xl:text-xl font-bold text-gray-900 mt-4">35</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg hover:bg-yellow-200 transition-all">
          <div className="flex items-center justify-between">
            <FaPlusCircle className="text-2xl md:text-3xl lg:text-4xl text-yellow-600" />
            <h3 className="text-sm lg:text-sm xl:text-md  font-semibold text-gray-800">Cars Added This Month</h3>
          </div>
          <p className="text-sm xl:text-xl font-bold text-gray-900 mt-4">15</p>
        </div>
        <div className="bg-red-100 p-6 rounded-lg shadow-lg hover:bg-red-200 transition-all">
          <div className="flex items-center justify-between">
            <FaRegEdit className="text-2xl md:text-3xl lg:text-4xl text-red-600" />
            <h3 className="text-sm lg:text-sm xl:text-md  font-semibold text-gray-800">Pending Car Deliveries</h3>
          </div>
          <p className="text-sm  xl:text-xl  font-bold text-gray-900 mt-4">12</p>
        </div>
        <div className="bg-indigo-100 p-6 rounded-lg shadow-lg hover:bg-indigo-200 transition-all">
          <div className="flex items-center justify-between">
            <FaDollarSign className="text-2xl md:text-3xl lg:text-4xl text-indigo-600" />
            <h3 className="text-sm lg:text-sm xl:text-md font-semibold text-gray-800">Total Revenue from Cars</h3>
          </div>
          <p className="text-sm  xl:text-xl  font-bold text-gray-900 mt-4">$550,000</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg shadow-lg hover:bg-purple-200 transition-all">
          <div className="flex items-center justify-between">
            <FaChartLine className="text-2xl md:text-3xl lg:text-4xl text-purple-600" />
            <h3 className="text-sm  lg:text-sm xl:text-md font-semibold text-gray-800">Top Selling Car Model</h3>
          </div>
          <p className="text-sm  xl:text-xl font-bold text-gray-900 mt-4">Toyota Corolla</p>
        </div>
      </div>

      {/* Car Sales Performance Graph Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-md md:text-xl font-semibold text-gray-800 mb-4">Car Sales Performance</h1>
        <div className="h-44 md:h-75   bg-gray-300 rounded-md">
          {/* Render the line chart */}
          <Line data={data} options={options} />
        </div>
      </div>

      {/* Recent Car Activities */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-md md:text-xl font-semibold text-gray-800 mb-4">Recent Car Activities</h3>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <p className="text-gray-600 text-xs md:text-sm">Car sold: Tesla Model S</p>
            <p className="text-xs md:text-sm text-gray-500">1 hour ago</p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-gray-600 text-xs md:text-sm">New car added: BMW 3 Series</p>
            <p className="text-xs md:text-sm text-gray-500">2 hours ago</p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-gray-600 text-xs md:text-sm">Car review updated: Honda Civic</p>
            <p className="text-xs md:text-sm text-gray-500">4 hours ago</p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-gray-600 text-xs md:text-sm">Sale completed for Ford Mustang</p>
            <p className="text-xs md:text-sm text-gray-500">6 hours ago</p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-gray-600 text-xs md:text-sm">New car arrival: Audi A4</p>
            <p className="text-xs md:text-sm text-gray-500">8 hours ago</p>
          </li>
        </ul>
      </div>

      {/* Quick Actions for Car Management */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-all">
          <h4 className="text-md   xl:text-xl font-semibold text-gray-800 mb-4">Add New Car</h4>
          <button className="px-6 py-2 text-xs font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200">
            <FaPlusCircle className="inline mr-2 " />
            Add Car
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-all">
          <h4 className="text-md  xl:text-xl font-semibold text-gray-800 mb-4">Manage Car Inventory</h4>
          <button className="px-2 py-3 text-xs font-bold bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-200">
            <FaBoxOpen className="inline mr-2" />
            Manage Inventory
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-all">
          <h4 className="text-md xl:text-xl font-semibold text-gray-800 mb-4">Track Car Deliveries</h4>
          <button className="px-2 py-3 text-xs font-bold bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition duration-200">
            <FaCar className="inline mr-2" />
            Track Deliveries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
