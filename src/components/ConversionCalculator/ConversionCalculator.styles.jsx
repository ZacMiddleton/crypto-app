import styled from "styled-components";

export const InputWrapper = styled.div`
  // width: 270px;
  height: 30px;
  display: flex;
  align-items: center;

  input {
    margin: 0;
    padding: 0 0 0 10px;
    height: 100%;
    border: none;
    background-color: ${({ theme }) => theme.nav};
    border-radius: 0px 5px 5px 0px;
    color: ${({ theme }) => theme.text};
  }

  input:focus {
    outline: none;
  }

  div {
    background-color: #03e858;
    border-radius: 4px 0 0 4px;
    height: 100%;
    padding: 0 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 20px;
  width: 50%;
  color: ${({ theme }) => theme.text};
  svg {
    height: 25px;
  }
`;
