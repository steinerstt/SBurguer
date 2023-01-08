import styled from "styled-components";

export const ContainerHeaderModalCart = styled.header`
  padding: 0.8125rem 1.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-primary);

  h2 {
    color: var(--color-white);
    font-size: var(--sz-title-1);
  }
`;

export const ButtonModalClose = styled.button`
  svg {
    font-size: 1.5625rem;
    color: var(--color-white);
  }
`;
