import styled, { css } from "styled-components";

export const Wrapper = styled.tr``;

export const TableData = styled.td`
  ${({ theme }) => css`
    font-size: 0.875rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.5rem;
    }

    a {
      color: ${theme.colors.gray800};
      font-family: Lexend, sans-serif;
      font-weight: 600;
      text-decoration: none;
      line-height: 1.5rem;
      font-size: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;

export const PlayButton = styled.button`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray100};
    border-radius: 0.5rem;
    font-size: 0;

    img {
      width: 1.25rem;
      height: 1.25rem;
    }

    &:hover {
      filter: brightness(0.95);
    }
  `}
`;
