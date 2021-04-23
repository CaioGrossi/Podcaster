import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray100};
    padding: 1.25rem;
    border-radius: 1.5rem;
    position: relative;
    display: flex;
    align-items: center;

    img {
      width: 6rem;
      height: 6rem;
      border-radius: 1rem;
    }

    @media (max-width: 900px) {
      width: 95%;
      padding: 1rem;
    }
  `}
`;

export const PlayButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    right: 2rem;
    bottom: 2rem;

    width: 2.5rem;
    height: 2.5rem;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray100};
    border-radius: 0.675rem;
    font-size: 0;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }

    &:hover {
      filter: brightness(0.95);
    }

    @media (max-width: 900px) {
      width: 2rem;
      height: 2rem;

      img {
        width: 1rem;
        height: 1rem;
      }
    }
  `}
`;

export const EpisodeDetails = styled.div`
  ${({ theme }) => css`
    flex: 1;
    margin-left: 1rem;

    a {
      display: block;
      color: ${theme.colors.gray800};
      font-family: Lexend, sans-serif;
      font-weight: 600;
      text-decoration: none;
      line-height: 1.4rem;

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      font-size: 0.875rem;
      margin-top: 0.5rem;
      max-width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    span {
      display: inline-block;
      margin-top: 0.5rem;
      font-size: 0.875rem;
      margin-right: 0.3rem;

      &:last-child {
        margin-left: 0.3rem;
        margin-right: 0;
      }
    }

    @media {
      p {
        font-size: 0.7rem;
      }
      span {
        font-size: 0.7rem;
      }
    }
  `}
`;
