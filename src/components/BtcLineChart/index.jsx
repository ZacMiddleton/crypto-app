import React, { useRef, useEffect } from "react";
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
import "chart.js/auto";
import { Container, ChartWrapper } from "./BtcLineChart.styles";
import { getFormattedDate, currencySymbol } from "/src/utils/ChartFunctions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ lineData, coinData, currency }) => {
  const chartRef = useRef(null);

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 3,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  const dateFormat = { day: "numeric", month: "numeric" };
  const labels =
    lineData
      .filter((item, index) => index % 5 === 0)
      .map((item) =>
        new Date(item[0]).toLocaleDateString(undefined, dateFormat)
      ) ?? null;
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: lineData.filter((item, index) => index % 5 === 0) ?? null,
        borderColor: "#00FF5F",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(0, 255, 95, 0.8)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
          return gradient;
        },
        pointRadius: 0,
        hitRadius: 3,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <ChartWrapper>
      <Container>
        <p>BTC</p>
        {coinData && (
          <h1>
            {coinData.map((item) => {
              if (item.id === "bitcoin") {
                return `${currencySymbol(currency)}${item.current_price.toLocaleString()}`;
              }
            })}
          </h1>
        )}
        <p>{getFormattedDate()}</p>
        {lineData && <Line ref={chartRef} options={options} data={data} />}
      </Container>
    </ChartWrapper>
  );
};

export default LineChart;
