import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { LinkIcon, ClipboardIcon } from "/src/assets/ThemeIcons";


export const Container = styled.div`
  width: calc(100% - 108px);
  margin: 0 auto;
  h2 {
    margin-top: 44px;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
    font-size: 15px;
  }
`;

export const CoinBox = styled.div`
  width: 176px;
  height: 211px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const ImgWrapper = styled.div`
  height: 70px;
  width: 70px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;

export const SummaryWrapper = styled.div`
  width: 100%;
  margin-top: 35px;
  display: flex;
  height: 273px;
  justify-content: space-between;
`;

export const SummaryLinkWrapper = styled(Link)`
  width: 176px;
  height: 44px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 9px;
  margin-top: 18px;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  p {
    margin: 0 auto;
  }
  font-size: 10px;
  svg {
    height: 11px;
    position: absolute;
    left: 9px;
  }
`;

export const MiddleContainer = styled.div`
  height: 100%;
  width: 273px;
  padding: 0 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 11px;
  h3 {
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    font-size: 40px;
  }
  p {
    font-size: 22px;
  }
  svg {
    color: ${({ theme }) => theme.text};
    height: 35px;
    margin: 9px 0;
  }
`;

export const AllTimeWrapper = styled.div`
  margin-bottom: 18px;
  p {
    font-size: 12px;
    color: ${({ theme }) => theme.text};
    position: relative;
  }
`;

export const Triangle = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 3px;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-${(props) => (props.positive ? 'bottom' : 'top')}: 3px solid ${(props) => (props.positive ? "green" : "red")};
  position: absolute;
  left: -13px;
  top: 15px;
`;

export const SummaryDataWrapper = styled.div`
  height: 100%;
  padding: 0px 110px 0px 22px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  font-size: 12px;
  font-weight: 400;
  border-radius: 11px;
  > :first-child {
    margin-top: 6px;
  }
  div {
    display: flex;
  }
  p {
    margin-top: 11px;
  }
`;

export const PercentageWrapper = styled.div`
  display: flex;
  margin-left: 11px;
  p {
    color: ${(props) => props.color};
  }
`;

export const SummaryDataContainer = styled.div`
  margin-top: 14px;
  flex-direction: column;
`;

export const BluePlus = styled.span`
  height: 22px;
  padding: 0 6px;
  background-color: #2172E5;
  border-radius: 6px;
  margin-right: 6px;
  font-size: 13px;
  color: #FFFFFF;
`;

export const BoldText = styled.span`
  font-weight: 900;
  color: ${props => props.color || 'inherit'};
`;

export const MaxBar = styled.div`
  margin-top: 11px;
  height: 9px;
  width: 100%;
  background-color: #2172E5;
  border-radius: 11px;
`;

export const CirculatingBar = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  z-index: 1;
  background-color: ${({ theme }) => theme.text};
  border-radius: 11px;
`;

export const DescriptionContainer = styled.div`
      width: calc(100% - 40px);
      padding 0px 20px 20px 20px;
      background-color: ${({theme}) => theme.secondary};
      color: ${({theme}) => theme.text};
      font-size: 12px;
      border-radius: 10px;
      flex-direction: column;
      text-align: center;
      line-height: 20px;
      margin-top: 32px;
      position: relative;
      svg {
        height: 20px;
        margin: 20px;
      }
      > :first-child {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      a {
        color: #2172E5;
        text-decoration: none;
      }
`

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  div {
    width: calc(100% - 50px);
    box-sizing: border-box;
    background-color: ${({theme}) => theme.secondary};
    color: ${({theme}) => theme.text};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 10px 20px;
    margin-right: 10px;
    margin-top: 15px;
    border-radius: 10px;
    position: relative;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.text};
  }

  div:last-child {
    margin-right: 0px;
  }
`;

export const StyledLinkIcon = styled(LinkIcon)`
  height: 14px;
`

export const StyledClipboard = styled(ClipboardIcon)`
  height: 20px;
  cursor: pointer;
`


export const CopiedTextWrapper = styled.div`
  position: fixed;
  background-color: #000000;
  border-radius: 20px;
  padding: 10px 25px 10px 20px;
  ${({theme}) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => props.isCopied ? "translateY(0px)" : "translateY(1000px)"};
  left: 45%;
  transition: transform 0.3s ease-out;
  visibility: ${(props) => props.isCopied ? "visible" : "hidden"};
  top: 900px;
  z-index: 1;
  color: #FFFFFF;
  svg {
    height: 20px;
    margin: 0 8px 0 0;
  }
`;
