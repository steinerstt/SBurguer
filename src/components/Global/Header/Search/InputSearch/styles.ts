import styled from "styled-components";

export const ContainerInputSearch = styled.form`
  display: flex;
  background-color: var(--color-white);
  border: 0.125rem solid var(--color-gray-100);
  border-radius: var(--bd-radius-1);
  overflow: hidden;
  padding: 0.5rem;
  position: absolute;
  top: 0.625rem;
  left: 0.625rem;
  right: 0.625rem;
  z-index: 20;

  @media screen and (min-width: 45rem) {
    position: unset;
  }

  input {
    font-size: var(--sz-text-2);
    width: 100%;
    margin: 0 0.5rem 0 0.4375rem;

    &::placeholder {
      color: var(--color-gray-300);
    }
  }

  button {
    svg {
      font-size: var(--sz-text-1);
      font-weight: var(--font-weg-1);
      font-weight: 700;
    }
  }
`;
