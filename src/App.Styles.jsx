import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";

export const AppContainer = withTheme(styled.div`
  background-color: ${(props) => {
    return props.theme.secondary;
  }};
`);

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text}
`;

export const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${(props) => {
    return props.theme.secondary;
  }};

  & > *:first-child {
    margin-left: 54px;
  }

  & > *: last-child {
    margin-right: 54px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  background: ${(props) => {
    return props.theme.primary;
  }};
`;

export const StyledDiv = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => {
    return props.theme.text;
  }};
`;
