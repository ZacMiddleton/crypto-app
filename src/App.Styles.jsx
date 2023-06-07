import styled, { withTheme } from "styled-components";

export const AppContainer = withTheme(styled.div`
  background-color: ${(props) => {
    return props.theme.secondary;
  }};
`);

export const NavContainer = styled.div`
  
`

export const MainNav = styled.div`
  display: flex;
`

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  background: ${(props) => {
    return props.theme.primary;
  }};
  padding: 0 3%;
`

