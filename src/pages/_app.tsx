import type { NextPage } from "next";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { ReactElement, useCallback } from "react";
import { wrapper } from "store";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import { theme } from "styles/theme";

export type NextPageWithLayout<P = {}, IP = {}> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const ComponentWithLayout = useCallback((): ReactElement => {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(<Component {...pageProps} />);
  }, [Component, pageProps]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ComponentWithLayout />
    </ThemeProvider>
  );
}

const WrappedApp = wrapper.withRedux(MyApp);

export default appWithTranslation(WrappedApp);
