import styled, {withTheme, css} from "styled-components"
import {NavLink} from "react-router-dom";
import { searchSVG } from '/src/utils/SVG';
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
  height: 60px;
  align-items: center;
  background: ${(props) => {
    return props.theme.secondary;
  }};

  div { 
    display: flex;
    align-items: center;
  }

  & > *:first-child {
    margin-left: 54px;
  }

  & > *: last-child {
    margin-right: 54px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  height: 65%;
  input {
    flex: 1;
    height: 90%;
    border-radius: 8px;
    width: 250px;
    color: ${({theme}) => theme.text};
    padding-left: 3em;
    background-image: url(${({theme}) => theme.searchIcon});
    background-repeat: no-repeat;
    background-position: 1em center;
    background-size: 1.25em;
    border: none;
    background-color: ${({theme}) => theme.nav }
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    color: ${({theme}) => theme.text};
    font-size: 12px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 35px;
  border-radius: 7px;
  color: ${({ theme }) => theme.text};
  ${({ $active, theme }) => {
    return (
      $active &&
      `
      background-color: ${theme.nav};
    `
    );
  }}
`;

export const ThemeIconContainer = styled.div`
  height: 100%;
  width: 39px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.nav};
`