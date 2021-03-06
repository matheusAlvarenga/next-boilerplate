import styled from "styled-components";

export const ButtonWrapper = styled.button<{ styling: "main" | "clear" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 8px 24px;

  border-radius: 8px;
  border: ${props =>
    props.styling === "main" ? "0" : `2px solid ${props.theme.colors.primary}`};

  background-color: ${props =>
    props.styling === "main" ? props.theme.colors.primary : "unset"};
`;

export const ButtonIcon = styled.div`
  width: 24px;
  height: 24px;

  color: ${props => props.theme.colors.white};
`;

export const ButtonText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  text-transform: uppercase;

  color: ${props => props.theme.colors.white};
`;
