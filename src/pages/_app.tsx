import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { appWithTranslation } from "next-i18next";
import { defaultTheme, ResetStyle } from "../styles";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={defaultTheme}>
    <Component {...pageProps} />
    <ResetStyle />
  </ThemeProvider>
);

export default appWithTranslation(MyApp);
