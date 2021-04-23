import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 45rem;
  padding: 3rem 2rem;
  margin: 0 auto;
`;

export const ThumbnailContainer = styled.div`
  ${({ theme }) => css`
    position: relative;

    img {
      border-radius: 1rem;
    }

    button {
      width: 3rem;
      height: 3rem;
      border-radius: 0.75rem;
      border: 0;
      position: absolute;
      z-index: 5;
      font-size: 0;

      &:first-child {
        left: 0;
        top: 50%;
        background-color: ${theme.colors.purple500};
        transform: translate(-50%, -50%);
      }

      &:last-child {
        right: 0;
        top: 50%;
        background-color: ${theme.colors.green500};
        transform: translate(50%, -50%);
      }
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    padding-bottom: 1rem;
    border-bottom: 1px solid ${theme.colors.gray100};

    h1 {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }

    span {
      display: inline-block;
      font-size: 0.875rem;

      margin: 0rem 1rem;
      position: relative;
    }
  `}
`;

export const EpisodeDescription = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    line-height: 1.675rem;
    color: ${theme.colors.gray800};

    p {
      margin: 1.5rem 0;
    }
  `}
`;
