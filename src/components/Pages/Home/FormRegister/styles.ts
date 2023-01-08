import styled from "styled-components";

export const ContainerTitleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonToLogin = styled.button`
  font-size: var(--sz-text-2);
  color: var(--color-gray-300);
  width: max-content;
  padding: 0;
  background-color: transparent;
  border-bottom: 0.0625rem solid var(--color-gray-300);
  margin-bottom: 2.125rem;
`;
