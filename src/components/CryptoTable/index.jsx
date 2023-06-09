import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import PercentageBar from "/src/components/PercentageBar";
import PercentageDisplay from "/src/components/PercentageDisplay";
import { currencySymbol } from "/src/utils/ChartFunctions";
import InfiniteScroll from "react-infinite-scroll-component";
import { formatCurrencyValue } from "../../utils/ChartFunctions";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import {
  StyledList,
  ListItem,
  TitleDiv,
  ChartWrapper,
  MetricsWrapper,
  CoinTitle,
  MetricsLegend,
  UnderLine,
  TableContainer,
} from "./CryptoTable.styles";

function CryptoTable({ fetchData }) {
  const currency = useSelector((state) => state.currency);
  const coinData = useSelector((state) => state.coinData.data);

  const formatNumber = (number) => {
    if (Math.abs(number) >= 1_000_000_000_000) {
      return (number / 1_000_000_000_000).toFixed(2) + "T";
    } else if (Math.abs(number) >= 1_000_000_000) {
      return (number / 1_000_000_000).toFixed(2) + "B";
    } else if (Math.abs(number) >= 1_000_000) {
      return (number / 1_000_000).toFixed(2) + "M";
    } else if (Math.abs(number) >= 1_000) {
      return (number / 1_000).toFixed(2) + "Th";
    } else {
      return number;
    }
  };

  const colorGeneratorOne = [
    "#e6b89c",
    "#fe938c",
    "#b47aea",
    "#deb841",
    "#5C1A1B",
  ];
  const colorGeneratorTwo = [
    "#4281a4",
    "#9cafb7",
    "#ead2ac",
    "#F26419",
    "#51E5FF",
  ];

  const options = {
    responsive: true,
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

  const generateChartData = (item) => {
    const sparklineData = item.sparkline_in_7d.price.filter(
      (_, index) => index % 18 === 0
    );
    const labels = sparklineData.map((_, index) => index);
    return {
      labels,
      datasets: [
        {
          label: "",
          data: sparklineData,
          borderColor:
            item.price_change_percentage_7d_in_currency > 0 ? "green" : "red",
          backgroundColor:
            item.price_change_percentage_7d_in_currency > 0 ? "green" : "red",
          pointRadius: 0,
          pointHoverRadius: 4,
          hitRadius: 3,
          tension: 0.4,
        },
      ],
    };
  };
  return (
    <TableContainer>
      <TitleDiv>
        <p>#</p>
        <p>Name</p>
        <p>Price</p>
        <p>1h%</p>
        <p>24h%</p>
        <p>7d%</p>
        <p>24h Volume/Market cap</p>
        <p>Circulating/Total Supply</p>
        <p>
          Last 7d <span></span>
        </p>
      </TitleDiv>
      <UnderLine />
      <StyledList>
        <InfiniteScroll
          dataLength={coinData.length}
          next={fetchData}
          scrollThreshold={0.8}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {coinData.map((item, index) => {
            const colorOne = colorGeneratorOne[Math.floor(Math.random() * 4)];
            const colorTwo = colorGeneratorTwo[Math.floor(Math.random() * 4)];
            return (
              <ListItem key={item.id}>
                <CoinTitle to={`/coin/${item.id}`}>
                  <img src={item.image} alt="" />{" "}
                  {`${item.name} (${item.symbol.toUpperCase()})`}
                </CoinTitle>
                <p>{formatCurrencyValue(item.current_price, currency)}</p>
                <PercentageDisplay
                  percentage={item.price_change_percentage_1h_in_currency}
                />
                <PercentageDisplay
                  percentage={item.price_change_percentage_24h_in_currency}
                />
                <PercentageDisplay
                  percentage={item.price_change_percentage_7d_in_currency}
                />
                <MetricsWrapper>
                  <div>
                    <p style={{ color: colorOne }}>
                      <MetricsLegend color={colorOne}></MetricsLegend>
                      {formatNumber(item.total_volume)}
                    </p>
                    <p style={{ color: colorTwo }}>
                      <MetricsLegend color={colorTwo}></MetricsLegend>
                      {formatNumber(item.market_cap)}
                    </p>
                  </div>
                  <PercentageBar
                    value1={item.total_volume}
                    value2={item.market_cap}
                    color1={colorOne}
                    color2={colorTwo}
                  />
                </MetricsWrapper>
                <MetricsWrapper>
                  <div>
                    <p style={{ color: colorOne }}>
                      <MetricsLegend color={colorOne}></MetricsLegend>
                      {formatNumber(item.circulating_supply)}
                    </p>
                    <p style={{ color: colorTwo }}>
                      <MetricsLegend color={colorTwo}></MetricsLegend>
                      {formatNumber(item.total_supply)}
                    </p>
                  </div>
                  <PercentageBar
                    value1={item.circulating_supply}
                    value2={item.total_supply}
                    color1={colorOne}
                    color2={colorTwo}
                  />
                </MetricsWrapper>

                <ChartWrapper>
                  <Line data={generateChartData(item)} options={options} />
                </ChartWrapper>
                {index < coinData.length - 1 && <UnderLine />}
              </ListItem>
            );
          })}
        </InfiniteScroll>
      </StyledList>
    </TableContainer>
  );
}

export default CryptoTable;
