import styled from "styled-components";

export const ContainerHeader = styled.header`
  height: 5rem;
  background-color: var(--color-gray-0);
  margin-bottom: 2.125rem;

  .container__wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ContainerOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;
