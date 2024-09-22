import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type BarChartCardProps = {
  title: string;
  description: string;
  data: number[];
  labels: string[];
};

const BarChartCard: React.FC<BarChartCardProps> = ({
  title,
  description,
  data,
  labels,
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Data Set 1",
        data,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
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
          text: "X-axis",
        },
      },
      y: {
        title: {
          display: true,
          text: "Y-axis",
        },
        min: 0,
        max: 100000,
        ticks: {
          // Custom callback to format numbers
          callback: function (value: number) {
            if (value >= 1000) {
              return value / 1000 + "k"; // Convert to 'k' format
            }
            return value;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend if not needed
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-between border border-gray-300 rounded-lg shadow-md p-2 min-w-sm w-80 h-96">
      {/* Card Header */}
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
        <button className="text-gray-500">...</button>
      </div>

      {/* Chart Container */}
      <div className="w-full">
        {/* Adjust height as needed */}
        <Bar data={chartData} options={options} />
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

export default BarChartCard;
