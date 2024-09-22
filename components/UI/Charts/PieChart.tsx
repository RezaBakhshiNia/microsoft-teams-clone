import { PieChart } from "@mui/x-charts";
import React, { useEffect, useState } from "react";

const PieChartCard: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between border border-gray-300 rounded-lg shadow-md p-2 min-w-sm w-80">
      {/* Card Header */}
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="text-lg font-semibold">Card title</h3>
          <p className="text-gray-500">Description</p>
        </div>
        <button className="text-gray-500">...</button>
      </div>

      {/* Time Period Selection */}
      <div className="flex space-x-4 my-4 w-full">
        <button className="border-b-2 border-indigo-600 pb-1 text-indigo-600">
          7 days
        </button>
        <button className="text-gray-600">30 days</button>
        <button className="text-gray-600">60 days</button>
      </div>

      {/* Chart */}
      <div className="flex justify-center items-center h-44 relative w-full">
        {isClient ? (
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                  { id: 2, value: 20, label: "series C" },
                ],
                innerRadius: 32,
                outerRadius: 50,
                paddingAngle: 0,
                cornerRadius: 0,
                startAngle: -299,
                endAngle: 225,
                cx: 150,
                cy: 150,
              },
            ]}
          />
        ) : null}
        <span className="absolute left-4 bottom-10">0</span>
        <span className="absolute right-0 bottom-10">100</span>
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-4 mt-4 w-full">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#00cfe8] mr-2"></div>
          <span className="text-sm text-gray-600">Label 1</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-300 mr-2"></div>
          <span className="text-sm text-gray-600">Label 2</span>
        </div>
      </div>

      {/* View Details */}
      <div className="mt-4 w-full">
        <a href="#" className="text-indigo-600 hover:underline text-sm">
          View details
        </a>
      </div>
    </div>
  );
};

export default PieChartCard;
