import styled from "styled-components";

export const HomepageWrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: stretch;

  padding: 40px;

  background-color: ${props => props.theme.colors.black};
`;
