import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 26.5rem;
    height: 100vh;
    padding: 3rem 4rem;

    background-color: ${theme.colors.purple500};
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    strong {
      font-family: Lexend, sans-serif;
      font-weight: 600;
    }
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const EmptyPlayer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 20rem;
    border: 1.5px dashed ${theme.colors.purple300};
    border-radius: 1.5rem;
    background: linear-gradient(
      143.8deg,
      rgba(145, 100, 250, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    padding: 4rem;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

type FooterProps = {
  isEmpty: boolean;
};

const footerModifiers = {
  isEmpty: () => css`
    opacity: 0.5;
  `,
};

export const Footer = styled.footer<FooterProps>`
  ${({ isEmpty }) => css`
    align-self: stretch;
    ${isEmpty && footerModifiers.isEmpty}
  `}
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }
`;

export const Slider = styled.div`
  flex: 1;
`;

export const EmptySlider = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 4px;
    background-color: ${theme.colors.purple300};
    border-radius: 2px;
  `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;
`;

type ButtonProps = {
  isActive?: boolean;
};

const buttonModifiers = {
  isActive: () => css`
    filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);

    &:hover {
      filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({ isActive }) => css`
    background: transparent;
    border: 0;
    font-size: 0;

    &:disabled {
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      filter: brightness(0.95);
    }

    ${isActive && buttonModifiers.isActive()}
  `}
`;

export const PlayButton = styled(Button)`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background-color: ${theme.colors.purple400};
  `}
`;

export const CurrentEpisode = styled.div`
  text-align: center;

  img {
    border-radius: 1.5rem;
  }

  strong {
    display: block;
    margin-top: 2rem;
    font: 600 1.25rem Lexend, sans-serif;
    line-height: 1.75rem;
  }

  span {
    display: block;
    margin-top: 1rem;
    opacity: 0.6;
    line-height: 1.5rem;
  }
`;
