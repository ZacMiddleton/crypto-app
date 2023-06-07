import styled, { withTheme } from "styled-components";

export const AppContainer = withTheme(styled.div`
  background-color: ${(props) => {
    return props.theme.secondary;
  }};
`);

export const Wrapper = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  background: ${(props) => {
    return props.theme.primary;
  }};
`;

