import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledList = styled.ul`
  position: absolute;
  width: 250px;
  z-index: 1;
  top: 50px;
  right: 300px;
  padding: 0;
  background: ${({ theme }) => theme.nav};
  list-style-type: none;
  font-size: 14px;
  display: flex;
  flex-direction: column;
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

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({theme}) => theme.text};
        font-size: 12px;
      }
`;
