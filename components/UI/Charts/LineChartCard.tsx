import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import React, { useState } from "react";

// Register necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // For area fill under the lines
);

type LineChartCardProps = {
  title: string;
  description: string;
  data1: number[];
  data2: number[];
  labels: string[];
};

const LineChartCard: React.FC<LineChartCardProps> = ({
  title,
  description,
  data1,
  data2,
  labels,
}) => {
  const [activeDays, setActiveDays] = useState("7"); // State to track active range (7, 30, or 60 days)

  // Define chart data with two datasets (two lines)
  const chartData = {
    labels,
    datasets: [
      {
        label: "Line 1",
        data: data1,
        fill: true, // Fill area under the line
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        tension: 0, // Smooth curve
        pointRadius: 0,
      },
      {
        label: "Line 2",
        data: data2,
        fill: true, // Fill area under the line
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
        tension: 0, // Smooth curve
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "X-axis title",
        },
      },
      y: {
        title: {
          display: true,
          text: "Y-axis title",
        },
        min: 0,
        max: 100000,
        ticks: {
          callback: function (value: number) {
            return value >= 1000 ? value / 1000 + "k" : value;
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom", // Legend at the bottom
      },
    },
  };

  // Data filters based on active days
  const handleDaysChange = (days: string) => {
    setActiveDays(days);
    // Implement logic here to adjust data for 7, 30, or 60 days if needed
  };

  return (
    <div className="flex flex-col items-center justify-between border border-gray-300 rounded-lg shadow-md p-4 w-full max-w-sm h-96 gap-2">
      {/* Card Header */}
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
        <button className="text-gray-500">...</button>
      </div>

      {/* Time Range Selection */}
      <div className="flex justify-start self-start gap-4">
        <button
          className={`text-sm pb-2 ${
            activeDays === "7"
              ? "border-b-2 border-indigo-500 text-indigo-600 font-semibold"
              : ""
          }`}
          onClick={() => handleDaysChange("7")}>
          7 days
        </button>
        <button
          className={`text-sm pb-2 ${
            activeDays === "30"
              ? "border-b-2 border-indigo-500 text-indigo-600 font-semibold"
              : ""
          }`}
          onClick={() => handleDaysChange("30")}>
          30 days
        </button>
        <button
          className={`text-sm pb-2 ${
            activeDays === "60"
              ? "border-b-2 border-indigo-500 text-indigo-600 font-semibold"
              : ""
          }`}
          onClick={() => handleDaysChange("60")}>
          60 days
        </button>
      </div>

      {/* Chart Container */}
      <div className="w-full h-52 self-start">
        <Line data={chartData} options={options} />
      </div>

      {/* View Details */}
      <div className="w-full self-start justify-self-end">
        <a href="#" className="text-indigo-600 hover:underline text-sm">
          View details
        </a>
      </div>
    </div>
  );
};

export default LineChartCard;
