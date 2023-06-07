
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import {StyledList, ListItem} from "./CryptoTable.styles"

function CryptoTable({ coinData }) {

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
        const sparklineData = item.sparkline_in_7d.price.filter((_, index) => index % 6 === 0);
        const labels = sparklineData.map((_, index) => index);
        return {
            labels,
            datasets: [
                {
                    label: '',
                    data: sparklineData,
                    borderColor: item.price_change_percentage_7d_in_currency >= 0 ? "green" : "red",
                    backgroundColor: item.price_change_percentage_7d_in_currency >= 0 ? "green" : "red",
                    pointRadius: 0,
                    pointHoverRadius: 4,
                    hitRadius: 3,
                    tension: 0.4,
                },
            ],
        };
    };

    return (
        <StyledList>
            {coinData.map((item) => (
                <ListItem key={item.id}>
                    <img src={item.image} alt="" />
                    <p>{`${item.name} (${item.symbol.toUpperCase()})`}</p>
                    <p>{item.current_price}</p>
                    <p>{`${item.price_change_percentage_1h_in_currency.toFixed(2)} %`}</p>
                    <p>{`${item.price_change_percentage_24h_in_currency.toFixed(2)} %`}</p>
                    <p>{`${item.price_change_percentage_7d_in_currency.toFixed(2)} %`}</p>
                    <p>{item.total_volume}</p>
                    <p>{item.market_cap}</p>
                    <p>{Math.floor(item.circulating_supply)}</p>
                    <p>{Math.floor(item.total_supply)}</p>
                    <div><Line data={generateChartData(item)} options={options} /></div>
                </ListItem>
            ))}
        </StyledList> 
    );
}

export default CryptoTable;