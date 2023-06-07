import styled from "styled-components";

export const MetricsBar = styled.div`
  padding-top: 2px;
  display: flex;
  height: 6px;
  width: 100%;
  & > *:first-child {
    border-radius: 15px 0 0 15px;
  }

  & > *:last-child {
    border-radius: 0 15px 15px 0;
  }
`