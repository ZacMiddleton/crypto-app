import parse from "html-react-parser";
import { useSelector } from "react-redux";
import ConversionCalculator from "/src/components/ConversionCalculator";
import {
  CoinBox,
  Container,
  ImgWrapper,
  SummaryWrapper,
  SummaryLinkWrapper,
  MiddleContainer,
  AllTimeWrapper,
  Triangle,
  SummaryDataWrapper,
  PercentageWrapper,
  SummaryDataContainer,
  BluePlus,
  BoldText,
  MaxBar,
  CirculatingBar,
  DescriptionContainer,
  LinksWrapper,
  StyledLinkIcon,
  StyledClipboard,
  CopiedTextWrapper,
} from "./CoinPage.styles";
import { useEffect, useState } from "react";
import { getPageData } from "/src/utils/CoinGecko";
import { useParams } from "react-router-dom";
import { LinkIcon, StackIcon, CopiedCheck } from "/src/assets/ThemeIcons";
import { currencySymbol } from "/src/utils/ChartFunctions";
import CoinPageChart from "/src/components/CoinPageChart";
import CoinPageTimeline from "/src/components/CoinPageTimeline";
import PercentageDisplay from "/src/components/PercentageDisplay";

const CoinPage = () => {
  const currency = useSelector((state) => state.currency);

  const [coinInfo, setCoinInfo] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [timeline, setTimeline] = useState("180");
  const { coinId } = useParams();

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  const handleInfo = (info) => {
    setCoinInfo(info.data);
  };

  useEffect(() => {
    getPageData(handleInfo, coinId);
  }, []);

  const { image, name, symbol, links, market_data, description } =
    coinInfo ?? {};
  const { homepage, blockchain_site, subreddit_url } = links ?? {};
  const {
    ath,
    ath_date,
    atl,
    atl_date,
    circulating_supply,
    current_price,
    fully_diluted_valuation,
    market_cap,
    market_cap_change_percentage_24h,
    max_supply,
    total_volume,
    price_change_percentage_24h,
  } = market_data ?? {};

  const getDomainName = (url) => {
    try {
      const urlObject = new URL(url);
      return urlObject.hostname;
    } catch (err) {
      console.log(err);
      return url;
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };

  const cur = currency.toLowerCase();
  const getPercentageBarWidth = () => {
    const sum = coinInfo ? (circulating_supply / max_supply) * 100 : 0;
    return `${sum}%`;
  };
  return (
    <>
      <Container>
        <h2>Your Summary</h2>
        {coinInfo && (
          <>
            <SummaryWrapper>
              <div>
                <CoinBox>
                  <ImgWrapper>
                    <img src={image.small} alt="" />
                  </ImgWrapper>
                  <p>{`${name} (${symbol.toUpperCase()})`}</p>
                </CoinBox>
                <SummaryLinkWrapper to={homepage[0]} target="_blank">
                  <LinkIcon />
                  <p>{getDomainName(homepage[0])}</p>
                </SummaryLinkWrapper>
              </div>
              <MiddleContainer>
                <h3>{`${currencySymbol(currency)}${Math.floor(
                  current_price[cur]
                ).toLocaleString()}`}</h3>
                <PercentageDisplay percentage={price_change_percentage_24h} />
                <StackIcon />
                <div>
                  <AllTimeWrapper>
                    <p>
                      <Triangle positive={true} />
                      {`All Time High: ${currencySymbol(currency)}${ath[
                        cur
                      ].toLocaleString()}`}
                    </p>
                    <p>{`${formatDate(ath_date[cur])}`}</p>
                  </AllTimeWrapper>
                  <AllTimeWrapper>
                    <p>
                      <Triangle positive={false} />
                      {`All Time Low: ${currencySymbol(currency)}${atl[
                        cur
                      ].toLocaleString()}`}
                    </p>
                    <p>{`${formatDate(atl_date[cur])}`}</p>
                  </AllTimeWrapper>
                </div>
              </MiddleContainer>
              <SummaryDataWrapper>
                <div>
                  <p>
                    <BluePlus>+</BluePlus>
                    <BoldText>Market Cap:</BoldText>{" "}
                    {`${currencySymbol(currency)}${market_cap[
                      cur
                    ].toLocaleString()}`}
                  </p>
                  <PercentageWrapper
                    color={
                      market_cap_change_percentage_24h > 0 ? "green" : "red"
                    }
                  >
                    <PercentageDisplay
                      percentage={market_cap_change_percentage_24h}
                    />
                    <p>%</p>
                  </PercentageWrapper>
                </div>
                <p>
                  <BluePlus>+</BluePlus>
                  <BoldText>Fully Diluted Valuation:</BoldText>{" "}
                  {`${currencySymbol(currency)}${
                    fully_diluted_valuation[cur]
                      ? fully_diluted_valuation[cur].toLocaleString()
                      : "N/A"
                  }`}
                </p>
                <p>
                  <BluePlus>+</BluePlus>
                  <BoldText>Volume 24h:</BoldText>{" "}
                  {`${currencySymbol(currency)}${total_volume[
                    cur
                  ].toLocaleString()}`}
                </p>
                <p>
                  <BluePlus>+</BluePlus>
                  <BoldText>Volume / Market:</BoldText>{" "}
                  {`${(total_volume[cur] / market_cap[cur]).toFixed(4)}`}
                </p>
                <SummaryDataContainer>
                  <p>
                    <BluePlus>+</BluePlus>
                    <BoldText color={"#03E858"}>Total Volume:</BoldText>{" "}
                    {`${Math.floor(
                      total_volume[cur] / current_price[cur]
                    ).toLocaleString()} ${symbol.toUpperCase()}`}
                  </p>
                  <p>
                    <BluePlus>+</BluePlus>
                    <BoldText>Circulating Supply:</BoldText>{" "}
                    {`${Math.floor(
                      circulating_supply
                    ).toLocaleString()} ${symbol.toUpperCase()}`}
                  </p>
                  {max_supply ? (
                    <p>
                      <BluePlus>+</BluePlus>
                      <BoldText color={"#2172E5"}>Max Supply:</BoldText>{" "}
                      {`${Number(
                        max_supply.toFixed(0)
                      ).toLocaleString()} ${symbol.toUpperCase()}`}
                    </p>
                  ) : (
                    <p>
                      <BluePlus>+</BluePlus>
                      <BoldText color={"#2172E5"}>Max Supply:</BoldText>{" "}
                      {`Infinity ${symbol.toUpperCase()}`}
                    </p>
                  )}
                  <MaxBar>
                    <CirculatingBar width={getPercentageBarWidth()} />
                  </MaxBar>
                </SummaryDataContainer>
              </SummaryDataWrapper>
            </SummaryWrapper>
            <h2>Description</h2>
            <DescriptionContainer>
              <div>
                <StackIcon />
              </div>
              {parse(description.en)}
              <CopiedTextWrapper isCopied={isCopied}>
                <CopiedCheck />
                <span>Copied to clipboard!</span>
              </CopiedTextWrapper>
            </DescriptionContainer>
            <LinksWrapper>
              <div>
                <StyledLinkIcon />
                <a
                  href={blockchain_site[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{getDomainName(blockchain_site[1])}</p>
                </a>
                <StyledClipboard
                  onClick={() => copyToClipboard(blockchain_site[1])}
                />
              </div>
              <div>
                <StyledLinkIcon />
                <a
                  href={blockchain_site[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{getDomainName(blockchain_site[2])}</p>
                </a>
                <StyledClipboard
                  onClick={() => copyToClipboard(blockchain_site[2])}
                />
              </div>
              {(subreddit_url || blockchain_site[3]) && (
                <div>
                  <StyledLinkIcon />
                  <a
                    href={subreddit_url ? subreddit_url : blockchain_site[3]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>
                      {subreddit_url
                        ? getDomainName(subreddit_url)
                        : getDomainName(blockchain_site[3])}
                    </p>
                  </a>
                  <StyledClipboard
                    onClick={() =>
                      copyToClipboard(
                        subreddit_url ? subreddit_url : blockchain_site[3]
                      )
                    }
                  />
                </div>
              )}
            </LinksWrapper>
            <CoinPageTimeline />
            <ConversionCalculator currency={currency} coinInfo={coinInfo} />
          </>
        )}
      </Container>
      {coinInfo && (
        <CoinPageChart coinId={coinId} currency={cur} timeline={timeline} />
      )}
    </>
  );
};

export default CoinPage;
