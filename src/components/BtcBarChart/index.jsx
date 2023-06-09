import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
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
import { Container, ChartWrapper } from "./BtcBarChart";
import {
  getFormattedDate,
  formatNumber,
  currencySymbol,
} from "/src/utils/ChartFunctions";

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
  const currency = useSelector((state) => state.currency);
  const barData = useSelector((state) => state.btcChartData.barData);
  const coinData = useSelector((state) => state.coinData.data);

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
    barData
      .filter((item, index) => index % 5 === 0)
      .map((item) =>
        new Date(item[0]).toLocaleDateString(undefined, dateFormat)
      ) ?? null;
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data:
          barData
            .filter((item, index) => index % 5 === 0)
            .map((item) => item[1]) ?? null,
        backgroundColor: "#2172E5",
      },
    ],
  };

  return (
    <ChartWrapper>
      <Container>
        <p>Volume 24h</p>
        {coinData && (
          <h1>
            {coinData
              .filter((item) => item.id === "bitcoin")
              .map((item) => {
                return `${currencySymbol(currency)}${formatNumber(
                  item.total_volume
                )}`;
              })}
          </h1>
        )}
        <p>{getFormattedDate()}</p>
        {barData && <Bar data={data} options={options} />}
      </Container>
    </ChartWrapper>
  );
};

export default BarChart;
