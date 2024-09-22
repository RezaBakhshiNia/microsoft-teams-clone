/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

type MultiSeriesPieChartCardProps = {
  title: string;
  description: string;
};

const MultiSeriesPieChartCard: React.FC<MultiSeriesPieChartCardProps> = ({
  title,
  description,
}) => {
  // Data for Multi-Series Pie Chart
  const data = {
    labels: [
      "30%",
      "30%",
      "30%",
      "30%",
      "30%",
      "30%",
      "30%",
      "30%",
      "30%",
      "30%",
      "30%",
      "30%",
      "30%",
      "30%",
      "30%",
      "30%",
    ],
    datasets: [
      {
        backgroundColor: ["#f5f5f5", "#555555"],
        data: [21, 79],
      },
      {
        backgroundColor: ["#f5f5f5", "#2563EB"],
        data: [33, 67],
      },
      {
        backgroundColor: ["#f5f5f5", "#3B82F6"],
        data: [20, 80],
      },
      {
        backgroundColor: ["#f5f5f5", "#AAAAAA"],
        data: [10, 90],
      },
      {
        backgroundColor: ["#f5f5f5", "#60A5FA"],
        data: [50, 50],
      },
      {
        backgroundColor: ["#f5f5f5", "#1D4ED8"],
        data: [25, 75],
      },
      {
        backgroundColor: ["#f5f5f5", "#1E3A8A"],
        data: [40, 60],
      },
      {
        backgroundColor: ["#f5f5f5", "#BFDBFE"],
        data: [15, 85],
      },
    ],
  };

  // Options for Multi-Series Pie Chart
  const options = {
    responsive: true,
    rotation: 90,
    circumference: 270, // Display only 270 degree of the pie
    plugins: {
      legend: {
        display: false,
        position: "top",
        align: "end",
        labels: {
          generateLabels: function (chart: any) {
            // Get the default label list from Chart.js
            const original =
              ChartJS.overrides.pie.plugins.legend.labels.generateLabels;
            const labelsOriginal = original.call(this, chart);

            // Get dataset colors
            let datasetColors = chart.data.datasets.map((e: any) => {
              return e.backgroundColor;
            });
            datasetColors = datasetColors.flat();

            // Modify the color and hide state of each label
            labelsOriginal.forEach((label: any) => {
              // Adjust index to map dataset labels
              label.datasetIndex = Math.floor(label.index / 2);

              // Match hidden state to dataset visibility
              label.hidden = !chart.isDatasetVisible(label.datasetIndex);

              // Set label color based on dataset colors
              label.fillStyle = datasetColors[label.index];
            });

            return labelsOriginal;
          },
        },
        onClick: function (mouseEvent: any, legendItem: any, legend: any) {
          const datasetIndex = legendItem.datasetIndex;
          const chart = legend.chart;
          const meta = chart.getDatasetMeta(datasetIndex);

          // Toggle visibility of the dataset
          meta.hidden = chart.isDatasetVisible(datasetIndex);
          chart.update();
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const labelIndex = context.datasetIndex * 2 + context.dataIndex;
            return `${context.chart.data.labels[labelIndex]}: ${context.formattedValue}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-between border border-gray-300 rounded-lg shadow-md p-4 w-80">
      {/* Card Header */}
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          {/* zoom */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.5 0C8.53757 0 11 2.46243 11 5.5C11 6.83879 10.5217 8.06586 9.72656 9.01962L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.68 14.0271 13.4106 14.0464 13.2157 13.9114L13.1464 13.8536L9.01962 9.72656C8.06586 10.5217 6.83879 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0ZM5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1Z"
              fill="#424242"
            />
          </svg>
          {/* resize */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.5 0L13.5428 0.00182295L13.6281 0.0166082L13.691 0.0377922L13.767 0.077188L13.8221 0.117594L13.8824 0.177876L13.9112 0.21534L13.9533 0.288604L13.9834 0.371861L13.9979 0.454214L14 0.5V6.5C14 6.77614 13.7761 7 13.5 7C13.2545 7 13.0504 6.82312 13.0081 6.58988L13 6.5V1.706L1.706 13H6.5C6.74546 13 6.94961 13.1769 6.99194 13.4101L7 13.5C7 13.7455 6.82312 13.9496 6.58988 13.9919L6.5 14L0.479643 13.9996L0.411201 13.9921L0.308964 13.9622L0.23299 13.9228L0.177856 13.8824L0.117575 13.8221L0.0888426 13.7847L0.0467436 13.7114L0.0166109 13.6281L0.0110857 13.605C0.00382522 13.5713 0 13.5361 0 13.5L0.00546193 13.5739L0.00182366 13.5428L0 7.5C0 7.22386 0.223858 7 0.5 7C0.74546 7 0.949608 7.17688 0.991944 7.41012L1 7.5V12.292L12.292 1H7.5C7.25454 1 7.05039 0.823125 7.00806 0.589876L7 0.5C7 0.223858 7.22386 0 7.5 0Z"
              fill="#424242"
            />
          </svg>
          {/* setting icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.91075 7.38266C2.28004 6.24053 2.88839 5.19213 3.69109 4.30364C3.82683 4.15339 4.03978 4.09984 4.23044 4.16802L6.14873 4.85392C6.6688 5.03977 7.24107 4.76883 7.42692 4.24875C7.4452 4.19762 7.45927 4.14507 7.469 4.09173L7.83446 2.08573C7.8708 1.88627 8.02398 1.7285 8.22227 1.6863C8.80246 1.5628 9.39734 1.5 10 1.5C10.6023 1.5 11.1968 1.56273 11.7767 1.68607C11.9749 1.72824 12.1281 1.88591 12.1645 2.08529L12.531 4.09165C12.6301 4.63497 13.1509 4.9951 13.6942 4.89601C13.7476 4.88627 13.8002 4.87219 13.8512 4.85395L15.7696 4.16802C15.9602 4.09984 16.1732 4.15339 16.3089 4.30364C17.1116 5.19213 17.72 6.24053 18.0893 7.38266C18.1516 7.57534 18.0915 7.78658 17.9371 7.91764L16.3823 9.23773C15.9613 9.5952 15.9098 10.2263 16.2673 10.6473C16.3024 10.6887 16.3409 10.7271 16.3823 10.7623L17.9371 12.0824C18.0915 12.2134 18.1516 12.4247 18.0893 12.6173C17.72 13.7595 17.1116 14.8079 16.3089 15.6964C16.1732 15.8466 15.9602 15.9002 15.7696 15.832L13.8513 15.1461C13.3312 14.9602 12.759 15.2312 12.5731 15.7512C12.5548 15.8024 12.5408 15.8549 12.531 15.9085L12.1645 17.9147C12.1281 18.1141 11.9749 18.2718 11.7767 18.3139C11.1968 18.4373 10.6023 18.5 10 18.5C9.39734 18.5 8.80246 18.4372 8.22227 18.3137C8.02398 18.2715 7.8708 18.1137 7.83446 17.9143L7.46902 15.9084C7.36993 15.365 6.84916 15.0049 6.30583 15.104C6.25241 15.1137 6.19987 15.1278 6.14881 15.1461L4.23044 15.832C4.03978 15.9002 3.82683 15.8466 3.69109 15.6964C2.88839 14.8079 2.28004 13.7595 1.91075 12.6173C1.84845 12.4247 1.90852 12.2134 2.06289 12.0824L3.61773 10.7623C4.03872 10.4048 4.09021 9.77373 3.73274 9.35274C3.69759 9.31135 3.65913 9.27288 3.61775 9.23775L2.06289 7.91764C1.90852 7.78658 1.84845 7.57534 1.91075 7.38266ZM2.9713 7.37709L4.26499 8.47546C4.34778 8.54576 4.42471 8.62269 4.49501 8.70548C5.20995 9.54746 5.10697 10.8096 4.26497 11.5246L2.9713 12.6229C3.26335 13.4051 3.6848 14.1322 4.21623 14.7751L5.81221 14.2044C5.91449 14.1679 6.01958 14.1397 6.12643 14.1202C7.21307 13.922 8.25462 14.6423 8.45281 15.729L8.75678 17.3975C9.16465 17.4655 9.58 17.5 10 17.5C10.4197 17.5 10.8348 17.4656 11.2424 17.3976L11.5472 15.7289C11.5667 15.6221 11.5949 15.517 11.6314 15.4147C12.0031 14.3746 13.1477 13.8327 14.1879 14.2044L15.7838 14.7751C16.3152 14.1322 16.7367 13.4051 17.0287 12.6229L15.735 11.5245C15.6522 11.4542 15.5753 11.3773 15.505 11.2945C14.7901 10.4525 14.8931 9.1904 15.7351 8.47544L17.0287 7.37709C16.7367 6.59486 16.3152 5.86783 15.7838 5.22494L14.1878 5.79559C14.0855 5.83214 13.9804 5.8603 13.8736 5.87979C12.787 6.07796 11.7454 5.3577 11.5473 4.27119L11.2424 2.60235C10.8348 2.53443 10.4197 2.5 10 2.5C9.58 2.5 9.16465 2.53448 8.75678 2.60249L8.45279 4.27105C8.43331 4.37791 8.40515 4.48299 8.3686 4.58527C7.99689 5.62542 6.85236 6.1673 5.81213 5.79556L4.21623 5.22494C3.6848 5.86783 3.26335 6.59486 2.9713 7.37709ZM7.50001 10C7.50001 8.61929 8.6193 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.6193 12.5 7.50001 11.3807 7.50001 10ZM8.50001 10C8.50001 10.8284 9.17159 11.5 10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17159 8.5 8.50001 9.17157 8.50001 10Z"
              fill="#424242"
            />
          </svg>
          {/* three dot icon */}
          <svg
            width="14"
            height="4"
            viewBox="0 0 14 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.25 2C3.25 2.69036 2.69036 3.25 2 3.25C1.30964 3.25 0.75 2.69036 0.75 2C0.75 1.30964 1.30964 0.75 2 0.75C2.69036 0.75 3.25 1.30964 3.25 2ZM8.25 2C8.25 2.69036 7.69036 3.25 7 3.25C6.30964 3.25 5.75 2.69036 5.75 2C5.75 1.30964 6.30964 0.75 7 0.75C7.69036 0.75 8.25 1.30964 8.25 2ZM12 3.25C12.6904 3.25 13.25 2.69036 13.25 2C13.25 1.30964 12.6904 0.75 12 0.75C11.3096 0.75 10.75 1.30964 10.75 2C10.75 2.69036 11.3096 3.25 12 3.25Z"
              fill="#424242"
            />
          </svg>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="w-full mt-4 relative h-64">
        <Pie data={data} options={options} />
        <div className="absolute top-[-15px] right-14">
          <ul>
            <li className="flex text-xs items-center justify-center">
              <span className="w-2 h-2 rounded-sm bg-[#555555]"></span>
              <span>30%</span>
            </li>
            <li className="flex text-xs items-center justify-center">
              <span className="w-2 h-2 rounded-sm bg-[#2563EB]"></span>
              <span>30%</span>
            </li>
            <li className="flex text-xs items-center justify-center">
              <span className="w-2 h-2 rounded-sm bg-[#3B82F6]"></span>
              <span>30%</span>
            </li>
            <li className="flex text-xs items-center justify-center">
              <span className="w-2 h-2 rounded-sm bg-[#AAAAAA]"></span>
              <span>30%</span>
            </li>
            <li className="flex text-xs items-center justify-center">
              <span className="w-2 h-2 rounded-sm bg-[#60A5FA]"></span>
              <span>30%</span>
            </li>
            <li className="flex text-xs items-center justify-center">
              <span className="w-2 h-2 rounded-sm bg-[#1D4ED8]"></span>
              <span>30%</span>
            </li>
            <li className="flex text-xs items-center justify-center">
              <span className="w-2 h-2 rounded-sm bg-[#1E3A8A]"></span>
              <span>30%</span>
            </li>
            <li className="flex text-xs items-center justify-center">
              <span className="w-2 h-2 rounded-sm bg-[#BFDBFE]"></span>
              <span>30%</span>
            </li>
          </ul>
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

export default MultiSeriesPieChartCard;
