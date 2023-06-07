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
import 'chart.js/auto'
import { Container } from "./BtcLineChart.styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({lineData}) => {
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
  const labels = lineData.filter((item, index) => index % 20 === 0)
  .map((item) => new Date(item[0]).toLocaleDateString(undefined, dateFormat)) ?? null;
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: lineData.filter((item, index) => index % 20 ===0)
        .map((item) => item[1]) ?? null,
        borderColor: "green",
        backgroundColor: "green",
      },
    ],
  };

  return <Container>{lineData && <Line options={options} data={data} />}</Container>;
};

export default LineChart;
