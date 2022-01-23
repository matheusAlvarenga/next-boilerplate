import React from "react";
import { ButtonIcon, ButtonText, ButtonWrapper } from "../styles";

export type ButtonProps = {
  Icon?: any;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ Icon, onClick, children }) => (
  <ButtonWrapper onClick={onClick}>
    {Icon && (
      <ButtonIcon>
        <Icon />
      </ButtonIcon>
    )}
    <ButtonText>{children}</ButtonText>
  </ButtonWrapper>
);
