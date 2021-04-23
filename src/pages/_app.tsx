import { ThemeProvider } from "styled-components";
import PlayerContext from "../contexts/PlayerContext";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <PlayerContext>
        <Component {...pageProps} />
        <GlobalStyles />
      </PlayerContext>
    </ThemeProvider>
  );
}

export default MyApp;
