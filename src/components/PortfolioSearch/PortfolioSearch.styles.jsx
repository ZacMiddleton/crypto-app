import styled from "styled-components";

export const Suggestion = styled.li`
  cursor: pointer;
  padding-left: 10px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.nav};
  }
`;

export const StyledList = styled.ul`
    position: absolute;
    height: 120px;
    width: 200px;
    z-index: 1;
    top: 106px;
    right: 138px;
    padding: 0;
    background: ${({ theme }) => theme.primary};
    list-style-type: none;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    -webkit-font-smoothing: antialiased;
    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const StyledInput = styled.input`
  padding: 10px 60px 10px 20px;
  background: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.text};
  border: none;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({theme}) => theme.text};
  }
`
