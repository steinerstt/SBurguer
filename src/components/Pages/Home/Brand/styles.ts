import styled from "styled-components";

export const ContainerBrand = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.875rem;

  & > img:last-of-type {
    display: none;

    @media screen and (min-width: 64rem) {
      display: block;
    }
  }
`;

export const ContainerSlogan = styled.div`
  padding: 1.125rem 0.875rem;
  border: 0.0625rem solid var(--color-gray-100);
  border-radius: var(--bd-radius-1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  div {
    width: 3.75rem;
    height: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background-color: var(--color-primary-alp-10);
    border-radius: var(--bd-radius-1);
  }

  p {
    color: var(--color-gray-300);
    font-size: var(--sz-text-2);
    line-height: 1.375rem;
    max-width: 16.3125rem;

    span {
      color: var(--color-gray-600);
      font-weight: var(--font-weg-2);
    }
  }
`;
