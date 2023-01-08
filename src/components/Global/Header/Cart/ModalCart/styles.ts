import styled from "styled-components";
import { AnimationModalClose, AnimationModalOpen } from "./stylesAnimation";

interface iModalProps {
  isModalClosing: boolean;
}

export const ContainerModalCart = styled.section`
  position: fixed;
  top: 0%;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-gray-600-alpha-50);
  z-index: 15;
`;

export const Modal = styled.section<iModalProps>`
  width: 90%;
  max-width: 31.25rem;
  margin: 0 auto;
  margin-top: 2%;
  border-radius: var(--bd-radius-1);
  overflow: hidden;
  animation: ${({ isModalClosing }) =>
      !isModalClosing ? AnimationModalOpen : AnimationModalClose}
    1s ease;
`;
