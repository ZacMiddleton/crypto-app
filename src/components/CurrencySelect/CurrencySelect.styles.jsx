import styled, {withTheme} from "styled-components"

export const DropDownWrapper = styled.div`
    position: relative;
    margin: 0 20px;
    height: 100%;
    cursor: pointer;
    padding-left: 10px;
    padding-right: 15px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.nav};
    p {
        cursor: pointer;
        font-size: 12px;
    }
`

export const DropDownMenu = styled.ul`
  visibility: ${({isOpen}) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
  transform: ${({isOpen}) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  position: absolute;
  left: 0%;
  top: 110%;
  list-style: none;
  z-index: 1;
  min-width: 99px;
  padding: 0;
  margin: 0 auto;
  border-radius: 8px;
  background: ${(props) => props.theme.nav};
  border: 1px solid ${({theme}) => theme.text};
  transition: visibility 0s linear ${({isOpen}) => (isOpen ? '0s' : '0.3s')}, opacity 0.3s ease-out, transform 0.3s ease-out;
  li {
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin: 5px 0;
  }
  li:hover {
    color: #03E858;
  }
`;

export const Symbol = styled.div`
    height: 25px;
    width: 25px;
    background: #1F2128;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    p {
        color: #03E858;
    }
`

export const Triangle = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 4px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  margin-left: 5px;
  border-${({isOpen}) => (isOpen ? 'bottom' : 'top')}: 4px solid green;
`;