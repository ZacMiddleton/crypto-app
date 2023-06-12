import { useState } from "react";
import { Line } from "react-chartjs-2";
import { getCoinChart } from "/src/utils/CoinGecko";
import { ChartContainer } from "./CoinPageChart.styles";
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
import { useEffect } from "react";
import { useSelector } from "react-redux";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinPageChart = ({ coinId }) => {
  const currency = useSelector((state) => state.currency)
  const timeline = useSelector((state) => state.coinPageTimeline);
  const [chartData, setChartData] = useState(null);

  const handleChartData = (data) => {
    const { prices } = data.data;
    setChartData(prices);
  };

  useEffect(() => {
    getCoinChart(handleChartData, coinId, currency, timeline);
  }, []);

  useEffect(() => {
    getCoinChart(handleChartData, coinId, currency, timeline);
  }, [timeline, currency, coinId]);

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
        display: false,
        grid: {
          display: false,
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

  const isIncrease = chartData?.[0]?.[1] < chartData?.[chartData.length - 1]?.[1];
  const labels = chartData?.map((_, index) => index) ?? {};
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: chartData,
        borderColor: isIncrease ? "rgba(0, 255, 95, 0.8)" : "red",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
          gradient.addColorStop(0, isIncrease ? "rgba(0, 255, 95, 0.8)" : "red");
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
    <ChartContainer>
      {chartData && <Line data={data} options={options} />}
      {!chartData && <p>no data</p>}
    </ChartContainer>
  );
};

export default CoinPageChart;
