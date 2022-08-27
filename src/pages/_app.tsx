import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { wrapper } from "store";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

const WrappedApp = wrapper.withRedux(MyApp);

export default appWithTranslation(WrappedApp);
