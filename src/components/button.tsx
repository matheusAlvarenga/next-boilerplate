import React from "react";
import { ButtonIcon, ButtonText, ButtonWrapper } from "../styles";

export type ButtonProps = {
  onClick: () => void;
  Icon?: any;
  styling?: "main" | "clear";
  data_testid?: string;
};

export const Button: React.FC<ButtonProps> = ({
  Icon,
  onClick,
  children,
  styling = "main",
  data_testid,
}) => (
  <ButtonWrapper data-testid={data_testid} styling={styling} onClick={onClick}>
    {Icon && (
      <ButtonIcon>
        <Icon />
      </ButtonIcon>
    )}
    <ButtonText>{children}</ButtonText>
  </ButtonWrapper>
);
