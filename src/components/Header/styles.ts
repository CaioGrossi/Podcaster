import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    height: 6.5rem;
    display: flex;
    align-items: center;
    padding: 2rem 4rem;
    width: 100%;

    border-bottom: 1px solid ${theme.colors.gray100};

    @media (max-width: 900px) {
      padding: 2rem;
    }
  `}
`;

export const Slogan = styled.p`
  ${({ theme }) => css`
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid ${theme.colors.gray100};
  `}
`;

export const Date = styled.span`
  ${({ theme }) => css`
    margin-left: auto;
    text-transform: capitalize;
  `}
`;
