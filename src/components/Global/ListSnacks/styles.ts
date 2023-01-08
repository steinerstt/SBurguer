import styled from "styled-components";

export const ContainerListSnacks = styled.ul`
  padding: 1.25rem 0;
  display: flex;
  gap: 1.25rem;
  overflow-x: scroll;

  @media screen and (min-width: 44.75rem) {
    flex-wrap: wrap;
    justify-content: center;
    overflow-x: hidden;
  }
`;
