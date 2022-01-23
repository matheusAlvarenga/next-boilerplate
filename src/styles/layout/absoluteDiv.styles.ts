import styled from "styled-components";

export const AbsoluteDiv = styled.div<{
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}>`
  position: absolute;

  ${props => (props.top ? `top: ${props.top};` : "")}
  ${props => (props.left ? `left: ${props.left};` : "")}
  ${props => (props.right ? `right: ${props.right};` : "")}
  ${props => (props.bottom ? `bottom: ${props.bottom};` : "")}
`;
