import styled, { css } from "styled-components";
import {
  animationSectionLeftToRight,
  animationSectionRightToLeft,
} from "./stylesAnimation";

interface iContainerLoginRegisterProps {
  isFormLogin: boolean;
}

export const ContainerHome = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerLoginRegister = styled.section<iContainerLoginRegisterProps>`
  width: 90%;
  max-width: 63.75rem;
  max-height: 31.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.875rem;
  animation: ${animationSectionLeftToRight} 1s ease;

  @media screen and (min-width: 64rem) {
    flex-direction: row;
  }

  ${({ isFormLogin }) => {
    if (!isFormLogin) {
      return css`
        @media screen and (min-width: 65rem) {
          flex-direction: row-reverse;
          animation: ${animationSectionRightToLeft} 1s ease;
        }
      `;
    }
  }}
`;
