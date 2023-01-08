import styled from "styled-components";

export const ContainerSummaryCart = styled.div`
  height: 3.125rem;
  background-color: var(--color-white);
  padding: 1.25rem 1.5rem 0.125rem;

  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 0.125rem solid var(--color-gray-100);
  }

  p {
    font-size: var(--sz-text-2);
    font-weight: var(--font-weg-2);

    &:last-child {
      color: var(--color-gray-300);
    }
  }
`;
