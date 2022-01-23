import styled from "styled-components";

export const MainTitle = styled.h1`
  font-family: Montserrat;
  font-style: italic;
  font-weight: 275;
  font-size: 32px;
  line-height: 39px;

  text-align: center;

  color: ${props => props.theme.colors.white};
`;

export const SubTitle = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 78px;

  text-align: center;
  text-transform: uppercase;

  color: ${props => props.theme.colors.white};
`;
