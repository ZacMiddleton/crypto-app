import { useState, useEffect } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import LineChart from "/src/components/BtcLineChart";
import BarChart from "/src/components/BtcBarChart";
import { BtcChartWrapper, Container } from "./Coins.styles";
import React from "react";
import CryptoTable from "/src/components/CryptoTable";
import { getBtcPriceData } from "../../store/btcChartData/actions";
import { setCurrency } from "../../store/currency/action";
import { getCoinData } from "../../store/coinData/actions";

const Coins = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  const lineData = useSelector((state) => state.btcChartData.lineData);
  const barData = useSelector((state) => state.btcChartData.barData);
  const coinData = useSelector((state) => state.coinData.data);

  const [perPage, setPerPage] = useState(25);
  const [pageNumber, setPageNumber] = useState(1);
  const [timeline, setTimeline] = useState(180);

  const fetchData = () => {
    const nextPage = pageNumber + 1;
    const morePerPage = perPage + perPage;
    dispatch(getCoinData(currency, nextPage, perPage));
    setPageNumber(nextPage);
    setPerPage(morePerPage);
  };

  useEffect(() => {
    dispatch(getBtcPriceData(currency, timeline));
  }, []);

  useEffect(() => {
    dispatch(getCoinData(currency, 1, perPage));
    dispatch(getBtcPriceData(currency, timeline));
  }, [currency]);

  return (
    <Container>
      <BtcChartWrapper>
        {lineData && barData && (
          <>
            <LineChart />
            <BarChart />
          </>
        )}
      </BtcChartWrapper>

      {coinData && <CryptoTable fetchData={fetchData} />}
    </Container>
  );
};

export default Coins;
