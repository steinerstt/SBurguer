import styled from "styled-components";

export const ContainerCardSnackCart = styled.li`
  display: flex;
  gap: 0.75rem;
`;

export const ContainerImg = styled.div`
  width: 5.125rem;
  height: 5rem;
  background-color: var(--color-gray-100);
  border-radius: var(--bd-radius-1);
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.25rem 0;
  width: 100%;

  h3 {
    font-size: var(--sz-title-1);
    font-weight: var(--font-weg-1);
  }

  p {
    color: var(--color-primary);
    font-weight: var(--font-weg-1);
  }
`;
