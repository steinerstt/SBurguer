import styled from "styled-components";

export const ContainerCart = styled.button`
  position: relative;

  svg {
    color: var(--color-gray-200);
    font-size: 1.5625rem;
  }

  span {
    position: absolute;
    top: -0.5625rem;
    left: 1.1875rem;
    padding: 0.25rem;
    background-color: var(--color-primary);
    border-radius: var(--bd-radius-2);
    color: var(--color-white);
    font-size: var(--sz-text-2);
  }
`;
