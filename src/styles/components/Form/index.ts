import styled from "styled-components";

export const Form = styled.form`
  width: 90%;
  max-width: 31.25rem;
  padding: 1.625rem 1.5rem;
  border-radius: var(--bd-radius-1);
  border: 0.125rem solid var(--color-gray-0);

  h2 {
    margin-bottom: 2.125rem;
  }

  > span {
    display: block;
    font-size: var(--sz-text-2);
    color: var(--color-negative);
    text-align: center;
    margin-bottom: 1.25rem;
  }
`;
