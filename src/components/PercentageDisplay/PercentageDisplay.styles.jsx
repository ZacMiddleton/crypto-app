import styled from "styled-components";

export const Percentage = styled.p`
  color: ${(props) => (props.positive ? 'green' : 'red')};
  display: flex;
  align-items: center;
`;

export const Triangle = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 4px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-${(props) => (props.positive ? 'bottom' : 'top')}: 4px solid ${(props) => (props.positive ? 'green' : 'red')};
`;