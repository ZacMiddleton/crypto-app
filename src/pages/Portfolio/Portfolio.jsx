import { useRef } from "react";
import {
  PortfolioContainer,
  AssetButton,
  StyledDialog,
  DialogContainer,
  SelectionWrapper,
  InputsWrapper,
  ButtonsWrapper,
  StyledButton,
  StyledInput,
  ImgWrapper
} from "./Portfolio.styles";
import PortfolioSearch from "../../components/PortfolioSearch";

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
            <ImgWrapper></ImgWrapper>
            <InputsWrapper>
                <PortfolioSearch />
                <StyledInput type="text" placeholder="Purchased amount" />
                <StyledInput type="text" placeholder="Purchased date" />
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
