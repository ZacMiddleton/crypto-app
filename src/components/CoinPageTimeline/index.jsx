import { useState } from "react";
import { TimelineWrapper, TimeContainer } from "./CoinPageTimeline.styles";

const CoinPageTimeline = ({ handleTimeline, timeline }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TimelineWrapper>
      <TimeContainer
        tabIndex={0}
        onClick={() => {
          handleTimeline("1");
          setIsFocused(true);
        }}
        backgroundColor={timeline === "1" ? "nav" : "secondary"}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused && timeline === "1"}
      >
        <p>24h</p>
      </TimeContainer>
      <TimeContainer
        tabIndex={0}
        onClick={() => {
          handleTimeline("7");
          setIsFocused(true);
        }}
        backgroundColor={timeline === "7" ? "nav" : "secondary"}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused && timeline === "7"}
      >
        <p>7d</p>
      </TimeContainer>
      <TimeContainer
        tabIndex={0}
        onClick={() => {
          handleTimeline("14");
          setIsFocused(true);
        }}
        backgroundColor={timeline === "14" ? "nav" : "secondary"}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused && timeline === "14"}
      >
        <p>14d</p>
      </TimeContainer>
      <TimeContainer
        tabIndex={0}
        onClick={() => {
          handleTimeline("30");
          setIsFocused(true);
        }}
        backgroundColor={timeline === "30" ? "nav" : "secondary"}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused && timeline === "30"}
      >
        <p>30d</p>
      </TimeContainer>
      <TimeContainer
        tabIndex={0}
        onClick={() => {
          handleTimeline("90");
          setIsFocused(true);
        }}
        backgroundColor={timeline === "90" ? "nav" : "secondary"}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused && timeline === "90"}
      >
        <p>90d</p>
      </TimeContainer>
      <TimeContainer
        tabIndex={0}
        onClick={() => {
          handleTimeline("180");
          setIsFocused(true);
        }}
        backgroundColor={timeline === "180" ? "nav" : "secondary"}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused && timeline === "180"}
      >
        <p>180d</p>
      </TimeContainer>
      <TimeContainer
        tabIndex={0}
        onClick={() => {
          handleTimeline("360");
          setIsFocused(true);
        }}
        backgroundColor={timeline === "360" ? "nav" : "secondary"}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused && timeline === "360"}
      >
        <p>1y</p>
      </TimeContainer>
      <TimeContainer
        tabIndex={0}
        onClick={() => {
          handleTimeline("max");
          setIsFocused(true);
        }}
        backgroundColor={timeline === "max" ? "nav" : "secondary"}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused && timeline === "max"}
      >
        <p>Max</p>
      </TimeContainer>
    </TimelineWrapper>
  );
};

export default CoinPageTimeline;
