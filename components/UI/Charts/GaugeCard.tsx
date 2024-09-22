import { Gauge, gaugeClasses } from "@mui/x-charts";
import React, { useEffect, useState } from "react";

const GaugeCard: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeDays, setActiveDays] = useState("7");
  // Data filters based on active days
  const handleDaysChange = (days: string) => {
    setActiveDays(days);
    // Implement logic here to adjust data for 7, 30, or 60 days if needed
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between border border-gray-300 rounded-lg shadow-md p-2 min-w-sm w-80 h-96">
      {/* Card Header */}
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="text-lg font-semibold">Card title</h3>
          <p className="text-gray-500">Description</p>
        </div>
        <button className="text-gray-500">...</button>
      </div>

      {/* Time Period Selection */}
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

      {/* Chart */}
      <div className="flex justify-center items-center h-44 relative w-full">
        {isClient ? (
          <Gauge
            width={180}
            height={180}
            value={72}
            text={"72%"}
            startAngle={-90}
            endAngle={90}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 30,
                transform: "translate(0px, -10px)",
              },
            }}
            innerRadius="80%"
            outerRadius="100%"
          />
        ) : null}
        <span className="absolute left-4 bottom-10">0</span>
        <span className="absolute right-0 bottom-10">100</span>
      </div>

      {/* Legend */}
      <div className="flex justify-center w-full">
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
      <div className="w-full">
        <a href="#" className="text-indigo-600 hover:underline text-sm">
          View details
        </a>
      </div>
    </div>
  );
};

export default GaugeCard;
