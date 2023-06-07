import styled, { withTheme } from "styled-components";

export const AppContainer = withTheme(styled.div`
  background-color: ${(props) => {
    return props.theme.primary;
  }};
`);

export const NavContainer = styled.div`
  
`

export const MainNav = styled.div`
  display: flex;
`

export const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`

