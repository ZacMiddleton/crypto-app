import LineChart from "/src/components/BtcLineChart";
import BarChart from "/src/components/BtcBarChart"
import {Container} from './Coins.styles'

function Coins() {
  return (
    <Container>
      <LineChart />
      <BarChart />
    </Container>
  );
}

export default Coins;
