import { useState } from "react";
import { DropDownMenu, DropDownWrapper } from "./CurrencySelect.styles";
export function CurrencySelect({ isOpen, optionSelected, currencyToggle }) {
  const currencyList = ["USD", "CAD", "GBP", "EUR", "BTC", "ETH"];
  return (
    <DropDownWrapper>
      <p onClick={() => currencyToggle()}>{optionSelected}</p>
      <DropDownMenu isOpen={isOpen} >
        {currencyList.map((item) => {
          return <li onClick={() => currencyToggle(item)} key={item} >{item}</li>;
        })}
      </DropDownMenu>
    </DropDownWrapper>
  );
}
