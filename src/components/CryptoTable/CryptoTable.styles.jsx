import styled, { withTheme } from "styled-components";

const gridTemplateColumns = `
  30px /* # */
  1fr /* Name */
  90px /* Price */
  60px /* 1h% */
  60px /* 24h% */
  60px /* 7d% */
  200px /* 24h Volume */
  200px /* Total Supply */
  100px /* Last 7d */
`;

export const StyledList = styled.ol`
  display: grid;
  font-size: 12px;
  gap 2px;
  padding: 0;
  img {
    height: 25px;
  }
  counter-reset: item;
`;

export const ListItem = styled.li`
  display: grid;
  counter-increment: item;
  grid-template-columns: ${gridTemplateColumns};
  align-items: center;
  gap 2px;
  &::before {
    content: counter(item) "";
    margin-right: 5px;
  }

  p {
    margin-right: 5px;

  }
`;

export const TitleDiv = styled.div`
  display: grid;
  font-size: 12px;
  grid-template-columns: ${gridTemplateColumns};
  gap 2px;

  & > *:last-child {
    display: flex;
    align-items: center;
  }

  span {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: green;
    margin-left: 5px;
  }
`;

export const ChartWrapper = styled.div`
  height: 50px;
  width: 100px;
`;

export const MetricsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-right: 0;
  }

  div {
    display: flex;
    width: 85%;
    justify-content: space-between;
  }
`;

export const CoinTitle = styled.p`
  display: flex;
  align-items: center;
  & > *:first-child {
    padding-right: 10px;
  }
`;

export const MetricsLegend = styled.span`
  display: inline-block;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: ${(props) => {
    return props.color;
  }};
  margin-right: 5px;
`;

export const UnderLine = styled.div`
  border: 1px solid ${(props) => {
    return props.theme.tertiary;
  }};
  width: 100%;
  display: block;
  grid-column: 1 / -1;
`;

export const TableContainer = styled.div`  
color: ${(props) => {
    return props.theme.text;
  }};
background-color: ${(props) => {
  return props.theme.secondary;
}};
width: calc (100% - 20px);
padding: 50px 20px;
border-radius: 10px;
margin-bottom: 50px;
`