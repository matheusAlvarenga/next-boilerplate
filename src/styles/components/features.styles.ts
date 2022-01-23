import styled from "styled-components";

export const FeaturesWrapper = styled.div<{
  side: "right" | "left";
  bottom: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.side === "left" ? "flex-start" : "flex-end")};
  justify-content: ${props => (props.bottom ? "flex-end" : "flex-start")};
  gap: 16px;

  height: 100%;

  color: ${props => props.theme.colors.white};
`;

export const FeaturesTitle = styled.div`
  font-family: Montserrat;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;

export const FeaturesItem = styled.div`
  font-family: Montserrat;
  font-style: italic;
  font-weight: 275;
  font-size: 24px;
  line-height: 29px;
`;
