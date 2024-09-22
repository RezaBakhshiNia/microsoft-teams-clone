import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

type HalfPieChartCardProps = {
  title: string;
  description: string;
  dataValues: number[];
  dataLabels: string[];
};

const MultiValuePieCard: React.FC<HalfPieChartCardProps> = ({
  title,
  description,
  dataValues,
  dataLabels,
}) => {
  const [activeDays, setActiveDays] = useState("7");
  // Data filters based on active days
  const handleDaysChange = (days: string) => {
    setActiveDays(days);
    // Implement logic here to adjust data for 7, 30, or 60 days if needed
  };
  // Chart Data Configuration
  const chartData = {
    labels: dataLabels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: [
          "#A6E9ED",
          "#00666D",
          "#005B70",
          "#00B7C3",
          "#F5F5F5",
        ],
        borderWidth: 2,
        weight: 0.5,
        spacing: 1,
      },
    ],
  };

  // Chart Options Configuration
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-between border border-gray-300 rounded-lg shadow-md p-4 w-80 gap-4">
      {/* Card Header */}
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
        <button className="text-gray-500">...</button>
      </div>

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

      {/* Half Pie Chart */}
      <div className="w-full relative h-80">
        <Doughnut data={chartData} options={options} />
        <span className="absolute top-[8.5rem] left-[7.5rem] text-lg font-semibold">
          1000
        </span>
      </div>

      {/* View Details */}
      <div className="w-full">
        <a href="#" className="text-indigo-600 hover:underline text-sm">
          View details
        </a>
      </div>
    </div>
  );
};

export default MultiValuePieCard;
