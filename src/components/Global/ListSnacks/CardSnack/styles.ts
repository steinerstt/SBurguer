import styled from "styled-components";

export const ContainerCardSnack = styled.li`
  width: 100%;
  max-width: 18.75rem;
  border: 0.125rem solid var(--color-gray-100);
  border-radius: var(--bd-radius-1);
  flex-shrink: 0;
  transition: 0.2s ease;
  overflow: hidden;

  &:hover {
    border-color: var(--color-primary);
    transform: scale(1.02);
  }
`;

export const ContainerImg = styled.section`
  background-color: var(--color-gray-0);
  width: 100%;
  height: 9.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  p {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    background-color: var(--color-primary);
    padding: 0.375rem 0.625rem;
    border-radius: var(--bd-radius-2);
    color: var(--color-white);
    font-size: var(--sz-text-2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ContainerBody = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.625rem 1.25rem;

  h2 {
    font-size: var(--sz-title-1);
  }

  p {
    font-size: var(--sz-text-2);
    font-weight: var(--font-weg-2);
    color: var(--color-primary);
  }
`;
