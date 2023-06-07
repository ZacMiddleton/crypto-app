import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { BtcPriceData } from "/src/utils/CoinGecko";
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
import 'chart.js/auto'
import {Container} from "./BtcBarChart"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [barData, setBarData] = useState(null);

  const getData = (info) => {
    setBarData(info.data.total_volumes);
  };

  useEffect(() => {
    BtcPriceData(getData);
  }, []);

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const dateFormat = { day: "numeric", month: "numeric" };
  const labels = barData?.filter((item, index) => index % 20 === 0)
  .map((item) => new Date(item[0]).toLocaleDateString(undefined, dateFormat)) ?? null;
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: barData?.filter((item, index) => index % 20 ===0)
        .map((item) => item[1]) ?? null,
        backgroundColor: "green",
      },
    ],
  };

  return <Container>{barData && <Bar data={data} options={options} />}</Container>;
};

export default BarChart;