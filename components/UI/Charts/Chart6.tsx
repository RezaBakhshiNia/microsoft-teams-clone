import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

const Chart6: React.FC = () => {
  const data = {
    labels: ["xs", "s", "m", "l", "xl", "xxl"],
    datasets: [
      {
        label: "Category 1",
        data: [80, 60, 65, 30, 50, 68],
        backgroundColor: "#93C5FD",
        borderColor: "#93C5ee",
        borderWidth: 1,
      },
      {
        label: "Category 2",
        data: [85, 95, 75, 88, 96, 77],
        backgroundColor: "#1D4ED8",
        borderColor: "#1D4Ee9",
        borderWidth: 1,
      },
      {
        label: "Category 3",
        data: [30, 30, 30, 30, 30, 30],
        backgroundColor: "#888888",
        borderColor: "#888aaa",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-between border border-gray-300 rounded-lg shadow-md p-4 w-96 gap-4 max-h-[28rem]">
      {/* Card Header */}
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="text-lg font-semibold">{"title"}</h3>
          <p className="text-gray-500">{"description"}</p>
        </div>
        <button className="text-gray-500">...</button>
      </div>

      <div className="flex items-center justify-between gap-2 self-start">
        <span className="border-b-2 border-blue-600 pb-2">firs Tab</span>
        <span className="pb-2">Second Tab</span>
        <span className="pb-2">Third Tab</span>
      </div>
      <div className="self-start justify-self-end h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart6;
