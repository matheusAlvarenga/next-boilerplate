import React from "react";
import { ButtonIcon, ButtonText, ButtonWrapper } from "../styles";

export type ButtonProps = {
  onClick: () => void;
  Icon?: any;
  styling?: "main" | "clear";
};

export const Button: React.FC<ButtonProps> = ({
  Icon,
  onClick,
  children,
  styling = "main",
}) => (
  <ButtonWrapper styling={styling} onClick={onClick}>
    {Icon && (
      <ButtonIcon>
        <Icon />
      </ButtonIcon>
    )}
    <ButtonText>{children}</ButtonText>
  </ButtonWrapper>
);
