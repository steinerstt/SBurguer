import styled, { css } from "styled-components";

interface iButtonProps {
  variant?: "primary" | "primaryMedium" | "secondary";
}

const buttonsOptions = {
  primary: css`
    background-color: var(--color-primary);
    color: var(--color-white);
  `,
  primaryMedium: css`
    font-size: var(--sz-text-2);
    width: unset;
    height: unset;
    padding: 0.75rem 1.25rem;
    background-color: var(--color-primary);
    color: var(--color-white);
    letter-spacing: 0.0125rem;
  `,
  secondary: css`
    background-color: var(--color-gray-0);
    color: var(--color-gray-300);
  `,
};

const ButtonBase = styled.button`
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--bd-radius-1);
  font-size: var(--sz-text-1);
  font-weight: var(--font-weg-2);
  width: 100%;

  &:hover {
    filter: brightness(98%);
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
    filter: brightness(1);
  }
`;

export const Button = styled(ButtonBase)<iButtonProps>`
  ${({ variant }) => buttonsOptions[variant || "primary"]}
`;
