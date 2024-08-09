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
  Legend,
} from "chart.js";
import { useGetHistoricalData } from "../lib/queryHooks/MapAndChartHooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph: React.FC = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const { data: historicalData } = useGetHistoricalData();

  const prepareGraphData = () => {
    if (!historicalData) return null;

    const cases = historicalData.cases;
    const labels = Object.keys(cases);
    const data = Object.values(cases);

    return {
      labels,
      datasets: [
        {
          label: "Cases",
          data: data as number[],
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
        },
      ],
    };
  };

  const graphData = prepareGraphData();

  return (
    <div className="border rounded-md shadow-md">
      <div className="flex justify-between w-full border-b-[1px] border-b-gray-200 p-3">
        <h3 className="font-bold text-base">
          Country Trends (Cases Fluctuations)
        </h3>
      </div>
      {graphData && (
        <div className="p-2">
          <Line options={options} data={graphData} />
        </div>
      )}
    </div>
  );
};

export default LineGraph;
