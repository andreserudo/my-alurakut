import { createGlobalStyle, ThemeProvider } from "styled-components";
import themes from "../src/themes";
import { GlobalStyle } from "../src/themes/GlobalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
