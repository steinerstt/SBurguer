import { keyframes } from "styled-components";

export const AnimationModalOpen = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  70% {
    transform:  translateY(10%);
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const AnimationModalClose = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  30% {
    transform: translateY(10%);
  }

  100% {
    transform: translateY(-100%);
    opacity: 0;
  }

`;
