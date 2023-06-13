import { useRef } from "react";
import {
  PortfolioContainer,
  AssetButton,
  StyledDialog,
  DialogContainer,
  SelectionWrapper,
  InputsWrapper,
  ButtonsWrapper,
  StyledButton
} from "./Portfolio.styles";

function Portfolio() {
  const dialogRef = useRef(null);

  const handleClickOpen = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const handleClickClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <PortfolioContainer>
      <AssetButton onClick={handleClickOpen}>Add Asset</AssetButton>
      <StyledDialog ref={dialogRef}>
        <DialogContainer>
          <p>Select Coins</p>
          <SelectionWrapper>
            <InputsWrapper>
                <input type="text" placeholder="Search Coins"/>
                <input type="text" placeholder="Purchased Amount" />
                <div>Purchased Date</div>
            </InputsWrapper>
          </SelectionWrapper>
        </DialogContainer>
        <ButtonsWrapper>
            <StyledButton onClick={handleClickClose}>Close</StyledButton>
            <StyledButton>Save and Continue</StyledButton>
        </ButtonsWrapper>
      </StyledDialog>
    </PortfolioContainer>
  );
}

export default Portfolio;
