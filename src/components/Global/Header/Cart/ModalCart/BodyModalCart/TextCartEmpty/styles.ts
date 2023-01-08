import styled from "styled-components";

export const ContainerTextCartEmpty = styled.div`
  height: 9.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: var(--sz-title-1);
    font-weight: var(--font-weg-1);
  }

  p {
    font-size: var(--sz-text-2);
    font-weight: var(--font-weg-4);
    color: var(--color-gray-300);
    margin-top: 0.625rem;
  }
`;
