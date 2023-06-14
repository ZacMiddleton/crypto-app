import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledList = styled.ul`
  position: absolute;
  width: 250px;
  z-index: 1;
  top: 38px;
  right: 200px;
  padding: 0;
  background: ${({ theme }) => theme.nav};
  list-style-type: none;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 8px 8px;
`;

export const Suggestion = styled(Link)`
  cursor: pointer;
  padding-left: 30px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.primary};
  }
`;

export const StyledInput = styled.input`
    flex: 1;
    height: 97%;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-position: 1em center;
    background-size: 1.25em;
    color: ${({theme}) => theme.text};
    border: none;
    background-color: ${({ theme }) => theme.nav};
    font-size: 14px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({theme}) => theme.text};
        font-size: 12px;
      }
`;
