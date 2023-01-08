import styled from "styled-components";

export const ContainerInput = styled.div`
  margin-bottom: 1rem;
`;

export const ContainerInputLabel = styled.div`
  position: relative;
  height: 3.125rem;

  label {
    position: absolute;
    top: 1.0625rem;
    left: 0.875rem;
    transition: 0.3s ease;
  }

  input {
    width: 100%;
    height: 100%;
    padding-left: 0.875rem;
    box-sizing: border-box;
    border: 0.125rem solid var(--color-gray-100);
    border-radius: var(--bd-radius-1);
    font-size: 0.875rem;

    &:focus {
      border-color: var(--color-primary);
    }
  }

  .input__focus {
    & ~ label {
      font-size: 0.75rem;
      padding: 0 0.5rem 0 0.25rem;
      transform: translateY(-156%);
      background-color: white;
    }
  }
`;

export const TextInputError = styled.span`
  display: block;
  color: var(--color-negative);
  font-size: var(--sz-text-3);
  margin-top: 0.5625rem;
`;
