import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 900px) {
    padding: 0 1rem;
    max-width: 95%;
  }
`;

export const LatestEpisodes = styled.section`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 900px) {
    > div {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 1.5rem;
      max-width: 95%;
    }
  }
`;

export const AllEpisodes = styled.section`
  ${({ theme }) => css`
    padding-bottom: 2rem;

    table {
      width: 100%;

      th,
      td {
        padding: 0.75rem 1rem;
        border: 1px solid ${theme.colors.gray100};
      }

      th {
        color: ${theme.colors.gray200};
        text-transform: uppercase;
        font: 500 0.75rem Lexend, sans-serif;
        text-align: left;
      }
    }
  `}
`;
