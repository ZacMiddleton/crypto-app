import { useState, useRef, useEffect } from "react";
import { DropDownMenu, DropDownWrapper, Symbol, Triangle } from "./CurrencySelect.styles";
import { currencySymbol } from "/src/utils/ChartFunctions";
export function CurrencySelect({ isOpen, optionSelected, currencyToggle, setIsOpen }) {
  const dropdownRef = useRef(null);
  const currencyList = ["USD", "CAD", "GBP", "EUR", "BTC", "ETH"];
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, [])

  return (
    <DropDownWrapper ref={dropdownRef} onClick={() => currencyToggle()} >
      <Symbol>
        <p>{currencySymbol(optionSelected)}</p>
      </Symbol>
      <p>{optionSelected}</p>
        <Triangle isOpen={isOpen} />
      <DropDownMenu isOpen={isOpen} >
        {currencyList.map((item) => {
          return <li onClick={() => currencyToggle(item)} key={item} >{item}</li>;
        })}
      </DropDownMenu>
    </DropDownWrapper>
  );
}
